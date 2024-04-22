//shows all the possible routes 
import { Link } from 'react-router-dom';
import routesData from '../data.json';
import './home.css'

const Home = () => {
  return ( 
    <div className='home'>
      <h1 className='home-title'>All Routes:</h1>
      <div className='home-list'>
        {routesData.map((item =>(
          <Link to={`/routes/${item.id}`}>
                         <h2>{item.title}</h2>     
                         {/*<p>{item.id}</p>*/}</Link>
        )))}
        </div>
    </div>
   );
}
 
export default Home;