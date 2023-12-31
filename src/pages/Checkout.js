import React from 'react';
import './Checkout.css';
import Subtotal from '../components/Subtotal';
import CheckoutProduct from '../components/CheckoutProduct';
import { useStateValue } from '../components/StateProvider';
import { auth } from '../firebase';

function Checkout() {
    const [{ basket, user }] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img className='checkout__ad' 
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
            alt=""
            />
            <div className='checkout__title'>
             <h3>{user?.email}</h3>
                <h2>Your shopping basket</h2>
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}

            </div>
        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout