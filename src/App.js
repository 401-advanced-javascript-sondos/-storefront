import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './compnent/header';
import Footer from './compnent/footer';
import Product from './compnent/product';
import Categories from './compnent/categories';


function App() {
  return (
  <>
  <Header/>
  <Categories />
  <Product/>
  <Footer/>
  </>
  );
}

export default App;
