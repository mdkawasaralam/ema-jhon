import React from 'react';
import './product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = ( ProPs) => {
const {name,img,seller,price,stock}= ProPs.Product;
console.log(ProPs);

    return (
        <div className='product'>
            <div className='product-img'>
             <img src={img} alt=''/>

            </div>
            <div className='product-info'>
            <h3>{name}</h3>
            <br/>
            <p> <small> By:{seller}</small></p>
            <br/>
            <p>${price} </p>
            <br/>
            <p> <small>only {stock} left in stock oder soon </small></p>
            <br/>
            <button className='main-button' onClick={ ()=>ProPs.heandleAddproduct(ProPs.Product)}>
            
            <FontAwesomeIcon icon={faShoppingCart}/>  Add to cart
            </button>
            

            </div>

           
         
        </div>
    );
};

export default Product;