import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './compnent/header';
import Footer from './compnent/footer';
import Products from './compnent/products';
import Categories from './compnent/categories';
import Cart from './compnent/cart.js'
import CartMain from './compnent/cartmain';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductDetail from './compnent/single';
import Checkout from './store/checkout'

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline >
          <Header />
          <CartMain />

          <Switch>

            <Route exact path='/'  >
              <Categories />
              <Products />
            </Route>


            <Route exact path='/products/:id' component={ProductDetail} />
            <Route exact path='/checkout' component={Checkout} />
            {/* <Route path='/cart' exact> */}
            {/* <Cart/> */}
          </Switch>
          <Footer />
        </CssBaseline>
      </BrowserRouter>
    </>
  );
}

export default App;
