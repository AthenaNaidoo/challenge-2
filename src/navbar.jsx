//navigation bar
import { Link } from 'react-router-dom';

export function Navbar ()  {
     return ( 
          <nav className="navbar">
               <div>
               <h1>Train Routes</h1>     
               </div>
               <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/basket">Ticket Basket</Link>
                    
               </div>
          </nav>
      );
};