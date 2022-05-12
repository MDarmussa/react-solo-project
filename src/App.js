import './App.css'
import Nav from './components/NavBar';
import Basket from './components/Basket';
import Main from './components/Main';
import data from './data';
import { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// import ResponsiveDialog from './components/BasketDialog';

// import Checkout from '../components/checkout/Checkout';
import Cart from './components/Cart';
import About from './pages/Payment';

import { Fragment } from 'react';
import Checkout from './components/checkout/Checkout';
import SignUp from './pages/SignUp';
import SignInSide from './pages/SignIn';

import Copyright from './components/Footer';
import SeeCode from './pages/Code';







function App() {
  const { products } = data;  //  extract products from data
  const [cartItems, setCartItems] = useState([]); //Hook method, useState to pass it in Main and Basket down here to be able to use it as hook in these components
  

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id)); // if the product.id != cartItems, then remove the item. or if qty  1, remove the item
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x // else, recrement the item
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' 
          element = {
            <Fragment>
              <Nav /> 
              <img src="background.jpg" alt="Logo" className='background' />
              <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} countCartItems={cartItems.length} Checkout={Checkout} />
              <Main products={products} onAdd={onAdd}></Main>
              <Copyright />
            </Fragment>
          }
        />

        <Route path='about' element={<About />} />
        <Route path='/login' element={<SignInSide />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/SeeCode' element={<SeeCode />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
