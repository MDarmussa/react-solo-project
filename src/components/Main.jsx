import React from 'react';
import Product from './Product';


export default function Main(items) { 
  // items is the props to pass the products from APP.js to here
  const { products, onAdd } = items;
  return (
    <main className="block col-2">
      <h2>Bags</h2>
      <div className="mainRow">
        {products.map((product) => (
          //map over the products
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}