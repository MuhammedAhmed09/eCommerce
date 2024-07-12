import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Cart from './Cart';
import NavBar from './components/NavBar';
import Details from './components/Details';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Footer from './Footer';

function App() {

  const api_key = 'https://fakestoreapi.com/products';
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);

const allProduct = () => {
  fetch(api_key)
  .then(res => res.json())
  .then((data) =>setAllProducts(data));
};

const category = () => {
  fetch(`${api_key}/categories`)
  .then((res) => res.json())
  .then((date) => setCategories(date) );
};

const getProductsInCat = (catNam) => {
  fetch(`${api_key}/category/${catNam}`)
  .then(res=>res.json())
  .then(json=>setAllProducts(json))
}

  useEffect(() => {
    allProduct();
    category();
  }, []);

  console.log(allProducts);
  console.log(categories);

  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home propsOnCategories={categories} propsOnProducts={allProducts}  propsOnProductsInCat={getProductsInCat} />} />
        <Route path='About' element={<About />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='product/:productId' element={<Details />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    
    </>
  );
}

export default App;
