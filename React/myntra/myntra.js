import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Card from "./src/components/Card.js";
import Footer from "./src/components/footer.js";
import arr from "./src/utils/obj.js";   

function App() {
  let [A, setA] = useState(arr);     

  function sortArray() {
    const sorted = [...A].sort((a, b) => a.price - b.price);
    setA(sorted);
  }

  function priceAbove499() {
    const B = arr.filter((value) => value.price > 499);
    setA(B);
  }

  return (
    <>
      <Header />

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "50px" }}>
        {A.map((value, index) => (
          <Card key={index} cloth={value.cloth} offer={value.offer} />
        ))}
      </div>

      <Footer />
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);