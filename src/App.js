import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Error} from './Pages/error';
import Home from './Pages/home';
import {Navbar} from './navbar';
import {SingleRoute} from './Pages/singleroute';
import Basket from './Pages/basket';
import Checkout from './Pages/checkout';
import { CartContextProvider } from './CartManager';
import {Finished} from './Pages/finished';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/routes/:id" element={<SingleRoute />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/finished" element={<Finished />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

//resourse I used for help 
//https://www.youtube.com/watch?v=tEMrD9t85v4
//https://www.youtube.com/watch?v=jbfuzcrfjqQ&t=1257s
//https://www.youtube.com/watch?v=SLfhMt5OUPI&t=901s
//https://www.youtube.com/watch?v=5mO-T2o9zuk&t=354s