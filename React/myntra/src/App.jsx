import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ProductCard() {
  return (
    <div style={{ border: "2px solid black", width: "250px", height: "350px", margin: "20px", padding: "10px" }}>
      <img
        src="https://imagescdn.thecollective.in/img/app/product/1/1162462-21947343.jpg?asp=true&crop=500&auto=format"
        width="200px"
        height="200px"
        alt="Polo T-Shirt"
      />
      <div style={{ textAlign: "center" }}>
        <p>Polo T-Shirt</p>
        <h2>Brand: U.S. Polo Assn.</h2>
        <h2>Price: ₹799</h2>
        <h1>40–50% off</h1>
        <p>Shop</p>
      </div>
    </div>
  );
} 
// Container for multiple cards
function CardGrid() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
// Mounting to root
const app = <CardGrid />;
const reactRoot = createRoot(document.getElementById('root'));
reactRoot.render(app);