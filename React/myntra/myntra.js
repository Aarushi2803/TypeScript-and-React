import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Card from "./src/components/Card.js";
import Footer from "./src/components/footer.js";
import obj from "./src/data/data.js";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Body */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom:"50px" }}>
        {arr.map((value, index) => (
          <Card key={index} cloth={value.cloth} offer={value.offer} />
        ))}
      </div>

      {/* Footer */} 
      <Footer/>
    </>
  );
} 

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);