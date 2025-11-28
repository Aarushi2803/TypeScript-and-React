// const header1 = document.createElement('h1');
// header1.textContent = 'Hello, React!';
// header1.style.color = 'blue';
// header1.style.backgroundColor = 'pink';

// const header2 = document.createElement('h2');
// header2.textContent = 'Hello, JavaScript!';
// header2.style.color = 'pink';
// header2.style.backgroundColor = 'blue';

// const root = document.getElementById('root');
// root.appendChild(header1);
// root.appendChild(header2); 

const element1 = React.createElement("h1",{},"Hello, React!");
const element2 = React.createElement("h2",
    {id:1,className:"Something",
    style:{color:"pink",backgroundColor:"blue"} },
    "Hello, JavaScript!");

const Reactroot = ReactDOM.createRoot(document.getElementById("root"));

Reactroot.render(
    React.createElement("div",{},element1,element2)
); 