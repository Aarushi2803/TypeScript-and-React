const element1 = (
  <h1 style={{ color: "blue", backgroundColor: "pink" }}>helllo</h1>
);

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>This is a simple JSX example.</p>
    </div>
  );
}

const Reactroot = ReactDOM.createRoot(document.getElementById("root"));

Reactroot.render(
  <div>
    {element1}
    {App()}
  </div> 
);