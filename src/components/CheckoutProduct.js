import React from 'react';
import "./CheckoutProduct.css";
import * as emoji from 'node-emoji';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

function CheckoutProduct({ id, image, title, price, rating, link, onClick, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const starStyle = {
        fontSize: '24px',
        color: 'gold',
    };

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
            link: link
        })
    }

  return (
    <FlipMove>
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} />

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
                {title}
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
            {Array(rating).fill().map((_, i) => (
                <p key={i} style={starStyle}>{emoji.get('star')}</p>
            ))}
            </div>
            {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
        </div>
    </div>
    </FlipMove>
    
  )
 
}

export default CheckoutProduct