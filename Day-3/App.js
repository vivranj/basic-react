import React from "react";
import ReactDOM from "react-dom/client";


// //React.createElement => React Element - JS Object => renderinto dom as HTML Element
// const heading=React.createElement("h1", {id:"heading"}, "This is heading from react");
// console.log(heading);

//JSX-HTML likeor XML like syntax
//JSX => babel transpiled it into React.createElement => React Element - JS Object => renderinto dom as HTML Element
//react element
//jsx in single line
const jsxHeading=<h1 id="heading1">Namaste react using jsx</h1>;
console.log(jsxHeading);

//jsx in multi line
const heading=(
    <h1 id="heading">
    Namaste react using jsx
    </h1>
);

const Title= () => (
    <h1 className="head" tabIndex="5">
    Namaste react using jsx
    </h1>
);

//React Functional component
//Component Composition
const HeadingComponent=()=>(
    <div id="container">
        <Title />
        <h1 className="heading">Namaste React Functionl Component</h1>
    </div>

);


const root=ReactDOM.createRoot(document.getElementById("root"));

//rendering react element/jsx
//root.render(heading);

//redering functinal component
root.render(<HeadingComponent />);

