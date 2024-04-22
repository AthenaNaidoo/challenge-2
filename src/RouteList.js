//no longer in use
import { Link } from 'react-router-dom';


const RouteList = (props) => {
     const {id, title, duration, stops, price, description}  = props.routes;
     
     return (  
          <div className="route-list">
               {routes.map((item) => (
                    <div className="route-preview" key={item.id}>
                    <Link to={`/routes/${item.id}`}>
                         <h1>{item.title}</h1>     
                         {/*<p>{item.id}</p>*/}
                    </Link>
              </div>
               ))}
          </div>
     );
};
 
export default RouteList;