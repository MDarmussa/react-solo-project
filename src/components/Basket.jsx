import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button } from 'bootstrap';
import { CardMedia } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Basket(items) {
  const { cartItems, onAdd, onRemove, product } = items; //props are importted from App.js
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0); //calculate subtotal. a: accumulate, c:current value
  const taxPrice = itemsPrice * 0.14; //0.14 is total tax
  const shippingPrice = itemsPrice > 2000 ? 0 : 20; //if the total price > $2000, the shipping is free, otherwise, it's $20 cost 

  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {items.productName}
        {cartItems.length === 0 && <div>Cart is empty</div>} {/* if the cart empty, add this div message */}
        {cartItems.map((item) => (
          <div key={item.id} className="rowCart">
            <div className="col-2" color='blue' >{item.productName}</div>
            <Stack direction="row" spacing={7}>
              <Avatar 
                alt={item.productName} src={item.image} className='cartImage'
                sx={{ width: 80, height: 80 }}
               />
            </Stack>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)} {/* toFixed is for two decimal points */}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-2 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-1">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-2 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-11">
                <strong className='col-11'>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            
            <div className="row">
              <button onClick={() => alert('In progress')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}