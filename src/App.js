import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Orders from './pages/Orders';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_Or9NkyYQtOUyVcRcnbYrPuck')

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS: ', authUser);
      if (authUser) {
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
})
  }, []);

  return (
    <Elements stripe={promise}>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<HeaderAndHome />} />
          <Route path="/checkout" element={<CheckoutHeader />} />
          <Route path="/orders" element={<HeaderAndOrders />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
      </Router>
    </Elements>
  );
}

function HeaderAndOrders() {
  return (
    <>
      <Header />
      <Orders />
    </>
  );
}

function HeaderAndHome() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

function CheckoutHeader() {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
}

export default App;