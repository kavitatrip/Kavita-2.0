const reactHeading = React.createElement("h1", 
{ id: "heading" }, "Hello World from React!"); 
// creating h1 tag using React
// reactHeading is an object 
// React.createElement returns an object and it is not an h1 tag

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(reactHeading); 
//here that react obj converted into h1 html tag and put itself into the DOM

//we prefer to use JSX to avoid the syntax we used as React.createElement as if we need to use nested div tags or any complex UI this syntax will increase complexity