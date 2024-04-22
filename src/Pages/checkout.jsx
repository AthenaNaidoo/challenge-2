import CheckOutList from '../ListCheckoutItem';
import routesData from '../data.json';
import { useContext } from 'react';
import { CartContext } from "../CartManager"
import { useNavigate, Link } from "react-router-dom";
import {Finished} from './finished';

const Checkout = () => {

     const {cartItems, addToCart, removeFromCart, getTotalCartAmount, removeAll } = useContext(CartContext);
     const totalAmount = getTotalCartAmount();
     const navigate = useNavigate();

     return (
          <div>
          <div className="cart">
                              <h1>Make payment:</h1>

          </div>
          <div className="route-summary">
           {routesData.map((item) => {
               if (cartItems[item.id] !== 0) {
                    return <CheckOutList data={item} />;
               }
           })}

          </div>
          <div>
               <h2>your total purchases are: R{totalAmount}</h2>
          </div>
          <Link to="/finished"><button>Purchase</button></Link>
          </div>
       );
}
 
export default Checkout;
