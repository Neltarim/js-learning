// MouseMove

/* 

clientX / clientY       : positition of the mouse in the DOM content
offsetX / offsetY       : posititon over the element we listen
pageX   / pageY         : position over the entire document
screenX / screenY       : positionover the window
movementX / movementY   : position over the previous mousemove event

*/

//exemple:

elt.addEventListener('mousemove', function(event) {
    const x = event.offsetX;
    const y = event.offsetY;
})