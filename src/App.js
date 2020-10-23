import React from 'react';
import './App.css';
import ProductTable from './ProductTable';

const products = [
  {title: 'iphone', price : '1200dt', category:"phone"}, 
  {title: 'Samsung', price : '899dt', category:"phone"}, 
  {title: 'Xiaomi', price : '850dt', category:"phone"}
];

function App() {
  return (
    <div className="App">
      <ProductTable products={products} />
    </div>
  );
}

export default App;
