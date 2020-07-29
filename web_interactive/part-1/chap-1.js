// DOM

// To seek an element in your html page, you can use the DOM.
const myAnchor = document.getElementById('my-anchor'); //by ID

const myContent = document.getElementsByClassName('content'); //by class
const firstContent = myContent[0];

const tag = getElementByTagName('button'); //by tag (button, title etc)

// See the doc to get more or the chapter "acces to the DOM"