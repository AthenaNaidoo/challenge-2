//list of all the items that you've added to your cart allows the user to add and remove items from their cart. Shows the total price of each item as well as the overall total
//import { Link } from 'react-router-dom';
import { CartContext } from './CartManager';
import { useContext } from 'react';
import './listcartitem.css';

const List = (props) => {
     const {cartItems, addToCart, updateCartItemCount, removeFromCart, getTotalCartAmount, removeAll, getCount, checkout, getItemTotal} = useContext(CartContext);
     const {id, title, duration, stops, price, description}  = props.data;
 


     
     return (  
          <div >
                    <div className="route-preview" key={id}>


                              <h1>{title}</h1>    
                              <p>stops: {stops}</p> 
                              <p>Price: R{price}</p> 
                              

                              <div className='route-button'>
                              <button className="addToCartBtn" onClick={() => addToCart(id)}>
                                   +
                              </button>
                              <p>{getCount(id)}</p>
                              
                              <button className="addToCartBtn" onClick={() => removeFromCart(id)}>
                                   -
                              </button>
                              </div>
                              <button className="addToCartBtn" onClick={() => removeAll(id)}>
                                   Delete from cart
                              </button>
                              

                    </div>
          </div>
     );
};
 
export default List;