import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { editPizza, removePizza } from '../actions/pizzaActions';
import { useNavigate } from 'react-router-dom';

export default function Pizza({pizza}) {
    const [quantity,setquantity]=useState(1)
    const [varient,setvarient]=useState('small')
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const isAdmin = currentUser && currentUser.isAdmin;
    const navigate = useNavigate();

    const dispatch = useDispatch();
    function addtocart(){
        dispatch(addToCart(pizza,quantity,varient))
    }
    function handleRemovePizza(pizzaId) {
        dispatch(removePizza(pizzaId));
    }
    function handleEditPizza(pizzaId) {
        navigate.push(`/edit/${pizzaId}`);
      }
    
  return (
    <div className='shadow-lg p-3 mb-5 bg-white rounded text-center'>
        <h1>
            {pizza.name}
        </h1>
        <img src={pizza.image} className='img-fluid' style={{height:'200px', width:'200px'}}/>
        <div className='flex-container'>
            <div className='w-100 m-1'>
                <p>Variants</p>
                <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                {pizza.varients.map(varient=>{
                    return <option value={varient}>{varient}</option>
                })}
                </select>
            </div>
            <div className='w-100 m-1'>
                <p>Quantity</p>
                <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                    {[...Array(10).keys()].map((x,i)=>{
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>
        </div>
        <div className='flex-container'>
            <div className='m-1 w-100'>
                <h1 className='mt-1'>Price: Rs.{pizza.prices[0][varient]*quantity}</h1>
            </div>
            <div className='m-1 w-100'>
                <button className='btn' onClick={addtocart}> ADD TO CART</button>
            </div>
            {isAdmin && (
              <a href="" className="nav-link m-2" onClick={() => handleRemovePizza(pizza._id)}>
                <img src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png' style={{height:'25px'}}/>
              </a>
              
            )}
        </div>
    </div>
  )
}

