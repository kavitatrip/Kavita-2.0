import React from "react";
import ReactDOM from "react-dom/client";

const reactHeading = React.createElement("h1", 
{ id: "heading" }, "Hello World from React!"); 
// creating h1 tag using React
// reactHeading is an object 
// React.createElement returns an object and it is not an h1 tag

//React.createElement => React element - JS Object =>HTML element(after rendering)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactHeading); 
//here that react obj converted into h1 html tag and put itself into the DOM

//we prefer to use JSX to avoid the syntax we used as React.createElement as if we need to use nested div tags or any complex UI this syntax will increase complexity

const jsxHeading = <h1 id="heading">"Namaste react through JSX</h1>
console.log(jsxHeading);
//JSX is not pure javascript, JS engine can't understand JSX
// JSX is transpiled before going to JS engine, as JS engine can't read JSX and our bundler 
// PARCEL is responsible for this transpilation, parcel is giving this responsiblity to Babel
// JSX ----> Babel ----> js engine readable/compatible code
//JSX --> Bable is transpiling it into --> React.createElement => React element - JS Object =>HTML element(after rendering)