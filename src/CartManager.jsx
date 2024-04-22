//manages all the cart functions 
import { createContext, useState } from "react";
import routesData from './data.json';

export const CartContext = createContext(null);

const getDefaultCart = () => {
     let cart = {};
     for (let i = 1; i < routesData.length + 1; i++) {
       cart[i] = 0;
     }
     return cart;
   };

export const CartContextProvider = (props) => {
     const [cartItems, setCartItems] = useState(getDefaultCart());

     //total cost of all the combined items 
     const getTotalCartAmount = () => {
          let totalAmount = 0;
          for (const item in cartItems) {
            if (cartItems[item] > 0) {
              let itemInfo = routesData.find((product) => product.id === item);
              totalAmount += cartItems[item] * itemInfo.price;
            }
          }
          return totalAmount;
        };

        //gets the number of single item 
        const getCount = (itemId) => {
          return cartItems[itemId];
        };

        //gets the total price of each item
        const getItemTotal = (itemId) => {
          let itemTotal=0
          let itemInfo = routesData.find((product) => product.id === itemId);
          itemTotal = cartItems[itemId] * itemInfo.price;
          return itemTotal;
        };

        //subtracts all of a single item
        const removeAll = (itemId) => {
          setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
        };


        //adds one item 
        const addToCart = (itemId) => {
          setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        };
   
        //removes one item
        const removeFromCart = (itemId) => {
          setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        };
      
        //
        const contextValue = {
          cartItems,
          addToCart,
          removeFromCart,
          getTotalCartAmount,
          removeAll,
          getItemTotal,
          getCount,
          getItemTotal,
        };
      
        return (
          <CartContext.Provider value={contextValue}>
            {props.children}
          </CartContext.Provider>
        );
      };