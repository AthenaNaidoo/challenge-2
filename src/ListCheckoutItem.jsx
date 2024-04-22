//list of all the items in your cart on the checkout page
//import { Link } from 'react-router-dom';
import { CartContext } from './CartManager';
import { useContext } from 'react';

const CheckOutList = (props) => {
     const {cartItems, getCount, checkout, getItemTotal} = useContext(CartContext);
     const {id, title, duration, stops, price, description}  = props.data;
     
     return (  
          <div className="route-list">
                    <div className="route-preview" key={id}>

                              <h2>{title}</h2>    
                              <p>Price: R {price}</p> 
                              <p>Number of Tickets {getCount(id)}</p>
                              <p>Total R {getItemTotal(id)} </p>
                              
                    </div>
          </div>
     );
};
 
export default CheckOutList;