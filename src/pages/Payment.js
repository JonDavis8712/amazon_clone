import React, { useState, useEffect } from 'react';
import './Payment.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useStateValue } from '../components/StateProvider';
import CheckoutProduct from '../components/CheckoutProduct';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../components/reducer';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import axios from '../components/axios';
import instance from '../components/axios';
import { db } from '../firebase';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currency subunits.
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket]);
    console.log('the secret is', clientSecret);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
    }).then(({ paymentIntent }) => {
        if(user?.uid && paymentIntent.id) {
        db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
        })
      } else {
        console.log('user?.uid or paymentIntent.id is undefined');
      }

        // paymentIntent = payment confirmation
        setSucceeded(true);
        setProcessing(false);
        setError(null);

        dispatch({
            type: 'EMPTY_BASKET'
        })

        navigate('/Orders',{ replace: true });
    })
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error? e.error.message : '');
    }

  return (
    <div className='payment'>
    <Header />
     <div className="payment__container">
       <h1>
        Checkout (<Link to="/checkout">{basket?.length}</Link>)
       </h1>
        <div className="payment__section">
            <div className="payment__title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
                <p>{user?.email}</p>
                <p>1000 React St.</p>
                <p>San Francisco, CA</p>
            </div>
        </div>

        <div className="payment__section">
            <div className="payment__title">
                <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>

        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment method</h3>
            </div>
            <div className="payment__details" onClick={handleSubmit}>
                <form>
                    <CardElement onChange={handleChange}/>
                    <div className="payment__priceContainer">
                      <CurrencyFormat
                        renderText = {(value) => (
                          <h3>Order Total: {value}</h3>
                        )}
                        decimalScale = {2}
                        value={getBasketTotal(basket)}
                        displayType = {"text"}
                        thousandSeparator = {true}
                        prefix={"$"}
                      />
                      <button disabled={processing || disabled || succeeded}>
                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                      </button>
                    </div>
                    {error && <div>{error.message}</div>}
                </form>
            </div>
        </div>
     </div>
    
    </div>
  )
}

export default Payment