//shows the details of the items that are in a basket 
import List from '../ListCartItem';
import routesData from '../data.json';
import { useContext } from 'react';
import { CartContext } from "../CartManager"
import { useNavigate, Link } from "react-router-dom";
import './basket.css'


const Basket = () => {

     const {cartItems, addToCart, removeFromCart, getTotalCartAmount, removeAll } = useContext(CartContext);
     const navigate = useNavigate();


     console.log(cartItems);


     return (
          <div>
          <div className="cart">
           <h1>Your selected items:</h1>

          </div>
          <div className="route-summary">
           {routesData.map((item) => {
               if (cartItems[item.id] !== 0) {
                    return <List data={item} />;                    
               }
           })}

          </div>
          <div className='cart-total'>
               <h2>your total purchases are: R{getTotalCartAmount()}</h2>
          
          <Link to="/checkout"> <button>Checkout</button> </Link>
          </div>
          </div>
       );
}
 
export default Basket;
