import React from "react";
import ReactDOM from "react-dom/client";

// // 1. 1st react app
// const heading=React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from React!!");
// const root=ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);//object

// root.render(heading);

// =========================================

//2 nested element in react

//need to create as below

// {/* <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//     </div>
// </div> */}



// const parent=React.createElement(
//     "div", 
//     {id:"parent"}, 
//     React.createElement(
//         "div", 
//         {id:"child"}, 
//         React.createElement(
//             "h1", 
//             {}, 
//             "I am h1 tag")
//     )  
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//NOTE:

//ReactElemnet is an object i.e parent becomes html that browser understands
//here render means it converts into itself into html and put it into dom



//3. if we have same element as h1 and h2 -> we need put it into an array

// {/* <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>
// </div> */}

// const parent=React.createElement(
//     "div", 
//     {id:"parent"}, 
//     React.createElement(
//         "div", 
//         {id:"child"}, [
//         React.createElement("h1", {}, "I am h1 tag"),
//         React.createElement("h2", {}, "I am h2 tag"),
//     ])  
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//4. more complex as below


// {/* <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>

//     <div id="child-2">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>
// </div> */}


const parent=React.createElement("div", {id:"parent"}, [ 
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ]),
    React.createElement("div", {id:"child-2"}, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ])   
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

//its very complex and untidy so here comes JSX to resolve this

//NOTE: if we have some h1 tag inside id root in html then it will replace by render element as parent here

//if we have put h1 tag above/below div id root in html then it will print so it means react only work in / replace only div id root element

//library and framework

//we call react as a library because react can be applied to the small portion of the page itself like only work on header, footer only

//framework will came as a lot of things


// NOTES FROM OTHER SOURCE

// code - App.js

/* Creating react elements and rendering in root_react  */ 

// const heading = React.createElement("h1", {id: "title"}, "Namaste React using React");
// const root_react = ReactDOM.createRoot(document.getElementById("root_react"));
// root_react.render(heading);

// /* Nested React Elements inside container div and rendering in root */
// const heading1 = React.createElement("h1", {id: "title"}, "Namaste React using React");
// const heading2 = React.createElement("h2", {id: "sub_title"}, "Nested React Elements");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const container = React.createElement("div", {id: "content"}, [heading1, heading2]);
// root.render(container);

// theory

// Summary of today's class:
// Intro about the namaste react course

// Environment needed : Editor - vs code, Browser - google chrome

// Extensions for VS code : better comments bracket pair colorization toggler es7+ react/redux gitlens prettier prettifyjson vs-code icons

// Created html boiler template in vs code using emmet and wrote html for printing some text.

// Wrote a simple js program to print Namaste Everyone in h1 tag inside div container with id root. -> used js engine's browser API called document to create h1 element and appendChild to append it to root div const heading = document.createElement("h1"); heading.innerHTML = "Namaste Everyone"; const root = document.getElementById("root); root.appendChild(heading);

// Wrote the same program using React

// -> Add script for react cdn link in body of index.hmtl -> create app.js and move our js script there -> Now, write the same script in react

// A react element is object with properties which is created by React library const heading = React.createElement("h1", {}, "Namaste Everyone");

// const root = ReactDOM.createRoot(document.getElementById("root")); root.render(heading);

// render() function will override the content of the root if there is any content already present in root container

// so until the root is rendered, if we want to display some error message, it can be written in html.

// what if we need to put more elements inside the root container - pass array of react elements to the container creation

// const heading1 = React.createElement("h1", {id : "title"}, "Namaste Everyone"); const heading2 = React.createElement("h2", {id : "sub_title"}, "Welcome");

// const container = React.createElement("div", {}, [heading1, heading2]); const root = ReactDOM.createRoot(document.getElementById("root")); root.render(container);

// Created a style.css file and linked to index.html

// Learn about arrow function for tomorrow's class


// code -index.html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Namaste React - Day 1</title>
// </head>
// <body>
//   <div id="root_html">
//     <h1>Namaste React using HTML</h1>
//   </div>

//   <div id="root_js"></div>

//   <div id = "root_react"></div>

//   <div id="root"></div>
  
//   <script>
//     /* Javascript*/
//     const h1 = document.createElement("h1");
//     h1.innerHTML = "Namaste React using JS";
//     const root_js = document.getElementById("root_js");
//     root_js.appendChild(h1);
//   </script>

//   <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
//   <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
//   <script src="./app.js"></script>
// </body>
// </html>



// Assignmentt -1

// Theory Assignment: Chapter - 01 Inception (24/12/2022)
// 1. What is Emmet ?
// Emmet is a plug-in for many popular text editors which greatly improves HTML & CSS. Emmet short hand expression can be used to generate HTML markup and css. Most useful emmet abbreviations are :

// HTML

// html:5 - generates html5 boilerplate
// ui>li - nested elements
// h1.#heading.container.con - create h1 element with id heading and classes container and con
// div[data-name=harshi] - Custom attribute
// header+div+footer - generate siblings
// CSS

// m10-10-10-10 - Margin on all sides margin: 10px 10px 10px 10px;
// 2. Difference between library and framework ?
// Library - collection of pre-defined helper functions, objects, classes, modules that can be used in code to boost the development. By using a library, you can control the flow of the application and call the library. Eg: React, JQuery, Lodash

// Framework - Foundation upon which applications are built. In contrast, when you use a framework, the control is inverted, i.e., the framework controls the flow and calls your code. Eg: Node JS, Angular, Spring

// 3. What is CDN ? Why do we use it ?
// A CDN also called a content distribution network, is a group of geographically distributed and interconnected servers. They provide cached internet content from a network location closest to a user to speed up its delivery.

// 4. Why is React known as React ?
// React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the View in MVC, this means that as the user clicks around and changes the app's data, the view should react or change with those user events.

// 5. What is cross-origin in script tag ?
// The crossorigin attribute provides support for CORS , defining how the element handles cross-origin requests. CORS stands for Cross-Origin Resource Sharing. If cross-origin is set to "user-credential", then user authentication is required to access the file.

// 6. What is difference between React and ReactDOM?
// React library contains functionality utilised in web and mobile apps (react native). ReactDOM library contains functionality utilised in web browser. It contains DOM manipulation utilities.

// 7.What is the difference between react.production.js and react.development.js ?
// react.production.js - production code of react library that is minified and production ready. react.development.js - More readable and developer friendly react library code that can be used to debug.

// 8.What is async and defer - check Akshay Saini's Youtube channel ?
// Without async/defer : Browser stops the html parsing once script tag is encountered. It resumes parsing only after script is fetched and executed.

// Async : Html parsing is done in parallel while scripts are being fetched from the network and executed. Once the script is done with execution, html parsing is resumed. This can be used for external scripts like google analytics. It is better to avoid async for scripts that are dependent on other scripts since we dont know in which order script will be executed.

// Defer : Similar to async, Html parsing is done in parallel while scripts are being fetched from the network. But scripts are executed only after the html parsing is done.
