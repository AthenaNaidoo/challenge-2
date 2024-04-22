//the details of each route including add to cart button and back button
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import routesData from '../data.json';
import { CartContext } from "../CartManager"
import { useContext } from "react";
import './home.css';

export function SingleRoute () {

     const { id } = useParams();
     const single = routesData.filter(routesData => routesData.id === id );

     const {cartItems, addToCart} = useContext(CartContext);
     const cartItemCount = cartItems[id];

     return (
          <div className="route-details">
               <Link to='/'><button>back</button></Link>
               <h1>{single[0].title}</h1>
               <h2>{single[0].description}</h2>
               <div className="block-detail">
               <p>Trip duration: {single[0].duration}</p>
               <p>Number of stops: {single[0].stops}</p>
               <p>Price: R {single[0].price}</p>
               </div>
               <button className="addToCartBtn" onClick={() => addToCart(id)}> 
                    Add to cart - currently added {cartItemCount}
               </button>
          </div>
       );
};