import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Cart from './Cart';
import NavBar from './components/NavBar';
import Details from './components/Details';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {

  const api_key = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_key)
    .then(res => res.json())
    .then((data) =>setProducts(data));
  }, []);

  console.log(products);

  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home propsOnProducts={products} />} />
        <Route path='About' element={<About />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='product/:productId' element={<Details />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
