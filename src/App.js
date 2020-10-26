import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './compnent/header';
import Footer from './compnent/footer';
import Product from './compnent/product';
import Categories from './compnent/categories';
import Cart from './compnent/cart.js'
import CartMain from './compnent/cartmain';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
     <Cart/>
  <Categories />
  <Product/>
 

  <Footer/>


      {/* <BrowserRouter>
        <CssBaseline >
          <Header />
          <Route path='/' exact >
            <div className="catCart">
              <Categories />
              <CartMain />
            </div>
            <Product />
          </Route>

          <Route path='/cart' exact component={Cart} />

          <Footer />
        </CssBaseline>
      </BrowserRouter> */}
    </>
  );
}

export default App;
