import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap';

import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import Ordersscreens from './screens/Ordersscreens';
import LandingPage from './screens/LandingPage';
import CustomerReview from './screens/CustomerReview';
import Footer from './components/footer';
import AddItem from './screens/addItem';
import ReservationForm from './screens/ReservationForm';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
      <Routes>
      <Route path="/" exact Component={LandingPage} />
      <Route path="/food" exact Component={Homescreen} />
      <Route path='/about' exact Component={CustomerReview} />
      <Route path='/cart' exact Component={CartScreen} />
      <Route path='/register' exact Component={RegisterScreen} />
      <Route path='/login' exact Component={LoginScreen} />
      <Route path='/orders' exact Component={Ordersscreens} />
      <Route path='/add' exact Component={AddItem} />
      <Route path='/table' exact Component={ReservationForm} />

      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
