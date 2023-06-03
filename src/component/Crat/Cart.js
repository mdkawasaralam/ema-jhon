import React from 'react';
import './cart.css'

const Cart = (ProPs) => {
    const cart=ProPs.cart
//    const  total= cart.reduce((total,prd )=>total+prd.price,0)
let total=0;
for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
     total= total+product.price;
    
}
let shipping =0;
if (total>35) {
    shipping=0;
    
}
 else if (total>15) {
    shipping=4.99;
    
} 
else if (total>0){
    shipping =12.99;   
}

const tax=total/10;
 const formatNumber= num=>{
 const   precision=num.toFixed(2);
 return Number(precision);
 }
 const grandTotal=total+shipping+tax;
    return (
        <div className='cart-box'>
           <h3>Oder summary</h3> 
           <p> Items Odered:{cart.length}</p>
           <p>product price:{formatNumber(total)}</p>
           <p>  shipping Cost:{ formatNumber(shipping) }</p>
           <p>tax+vat:{ formatNumber(tax)}</p>
           <p> Total:{ formatNumber(grandTotal)}</p>
           <button className='cart-btn' > review your oder</button>
           
        </div>
    );
};

export default Cart;