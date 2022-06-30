import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
// import { useState } from 'react/cjs/react.production.min';
import { useStateValue } from './StateProvider';
// import CheckoutProducer from './CheckoutProduct';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout__left">

     
      <img className='checkout__ad'
      src="https://www.creatopy.com/blog/wp-content/uploads/2019/05/standard-banner-sizes-1.jpg" alt="" />
      
      <div>
        <h3>
         Hello, {user?.email}
        </h3>
        <h2 className="checkout__title">
          Your Shopping Basket
        </h2>
        {basket.map(item=>(
          <CheckoutProduct
          id={item.id}
         
          title={item.title}
          image={item.image}
          price={item.price }  
     
          rating={item.rating}
          />
        )
          )}
       
       {/* {BasketItem}
       {BasketItem}
       {BasketItem}
       {BasketItem}
       {BasketItem} */}
      </div>
         </div>
         <div className="checkout__right">
           <Subtotal />
         </div>
    </div>
  )
}

export default Checkout;