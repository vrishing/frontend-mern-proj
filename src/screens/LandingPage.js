import React from 'react';
import '../App.css';
import biryani from '../assets/biryani.jpg';
import pasta from '../assets/pasta.jpg';
import pizza from '../assets/pizza.jpg';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/food`;
    navigate(path);
  };

  const routeChange2 = () => {
    let path = `/table`;
    navigate(path);
  };

  return (
    <div className="App container-fluid">
      <div className="App-header">
        <div className="block">
          <div className="hi">
         
            <p className="paragraph text-left m-5"> <h1 className="yes header-text">Discover a World of Culinary Delights, One Reservation at a Time.</h1><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare. Volutpat est velit egestas dui id ornare arcu. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Mattis aliquam faucibus purus in massa tempor. Feugiat in fermentum posuere urna nec. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Ut etiam sit amet nisl purus in mollis nunc sed. Nisl purus in mollis nunc sed id. Nec ullamcorper sit amet risus. Tellus cras adipiscing enim eu turpis..</p>
          </div>
          <div className="hi2">
            <button className="button-54" role="button" onClick={routeChange2}>
              BOOK A TABLE NOW!!!
            </button>
            <button className="button-54" role="button" onClick={routeChange}>
              ORDER FOOD NOW!!!
            </button>
          </div>
        </div>
      </div>

      <div className="featured container">
        <h1 className="featured-title">Featured Dishes</h1>
        <div className="row">
          <div className="col-4">
            <img src={biryani} alt="biryani" />
            <h4>Chicken Biryani</h4>
            <div className="rating"></div>
            <p>Rs. 350</p>
          </div>
          <div className="col-4">
            <img src={pasta} alt="pasta" />
            <h4>Pasta</h4>
            <div className="rating"></div>
            <p>Rs. 200</p>
          </div>
          <div className="col-4">
            <img src={pizza} alt="pizza" />
            <h4>Pizza</h4>
            <div className="rating"></div>
            <p>Rs. 699</p>
          </div>
        </div>
      </div>

      <div className="testimonial container">
        <div>
          <h1 className="testimonial-title">Testimonials</h1>
        </div>
        <div className="row-1">
          <div className="col-3">
            <p>Nice!</p>
            &#9733;&#9733;&#9733;&#9733;&#9733;<br />
            <img src={person1} alt="person" />
            <h3>May</h3>
          </div>
          <div className="col-3">
            <p>Best Food</p>
            &#9733;&#9733;&#9733;&#9733;&#9733;<br />
            <img src={person2} alt="person" />
            <h3>Binod</h3>
          </div>
          <div className="col-3">
            <p>Must try the Biryani</p>
            &#9733;&#9733;&#9733;&#9733;&#9733;<br />
            <img src={person3} alt="person" />
            <h3>Tony</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
