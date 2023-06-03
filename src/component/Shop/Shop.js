import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json'
import './Shop.css'
import Product from '../product/product';
import Cart from '../Crat/Cart';





const Shop = () => {
  const first10=fakeData.slice(50,60);
 const [ products, setproducts]=useState(first10);
 const [cart,setCart]=useState([]);
 

 const heandleAddproduct= (product)=>{
      console.log('product added' ,product);
      const newCart=[...cart, product];
      setCart(newCart);
 }



  return <div className='shop-container '>
                    <div className='product-container'>
                      
                          {
                            products.map(items=><Product
                            heandleAddproduct= { heandleAddproduct}
                               Product={items}>
                                     </Product>)
                          }
                      
                    </div>

                    <div className='card-container'> 
                <Cart cart={cart}></Cart>
                     
                    </div>
  

    
           </div>

};

export default Shop;