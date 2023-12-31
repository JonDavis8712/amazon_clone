import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from '../components/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order, basket }) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        <p className="order__id">
            <small>{order.id}</small>
        </p>
        {order.data.basket?.map(item => (
            <CheckoutProduct 
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                hideButton={true}
            />
        ))}
        <CurrencyFormat
      renderText={(value) => (
        <>
            <h3 className='order__total'>Order Total: {value}</h3>
        </>
      )}
      decimalScale={2}
      value={order.data.amount / 100}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      />
    </div>
  )
}

export default Order