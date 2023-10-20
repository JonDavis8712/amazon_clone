import React,{ useState } from 'react';
import './Product.css';
import * as emoji from 'node-emoji';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';



function Product({ id, title, image, price, rating, link}) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);
    const starStyle = {
        fontSize: '30px',
        color: 'gold',
        marginTop: '-10px',
    };
    const handleProductPage = () => {
        window.location.href = link;
    }

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })

    }

  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className="prodcut__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
            {Array(rating).fill().map((_, i) => (
                <p key={i} style={starStyle}>{emoji.get('star')}</p>
            ))}
            </div>
        </div>
        <img onClick={handleProductPage} src={image} alt="" />
        <button className='Addto__Basket' onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product;