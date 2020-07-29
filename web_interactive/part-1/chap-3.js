// Event Listenner

const link = document.getElementsByName('random-link')

link.addEventListener('click', function() { //note: this is dark magic
    link.innerHTML = "Clicked !";
})

// PPREVENT DEFAULT !!


link.addEventListener('click', function() {
    event.preventDefault()  // This sort of power is too big for the human kind

    link.stopPropagation() // prevent the propagation to the parent element
})
