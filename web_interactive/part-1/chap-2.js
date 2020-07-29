// Modify the DOM

// to modify an element, we use innerHTML and textContent
    // innerHTML : need a piece of HTML to swap
    // textContent : need a string

let elt = document.getElementsById('main');
elt.innerHTML = "<ul><li>Element 1</li><li>Eleemnt 2</li></lu>";

//you can also modify the classes of an element
elt.classList.add('new class');
elt.classList.remove('old class');
elt.classList.contains('class to seek');
elt.classList.replace('old class', 'new class');

//you can also modify the style of an element
elt.style.color = "#fff";
elt.style.backgroundColor = "#000";
elt.style.fontWeight = "bold";

// and change his attribute with set (and get)

elt.setAttribute("type", "password") //change the type to a password field
elt.setAttribute("name", "my-password") // change the name

elt.getAttribute("name")   // get the name




// CReate new elements

const newElt = document.createElement("div");
// we still need to add it to a parent

const parent_elt = document.getElementsById("main")
parent_elt.appendChild(newElt)



//remove or replace a child
elt.removeChild(newElt)
elt.replaceChild(document.createElement("article"), newElt)