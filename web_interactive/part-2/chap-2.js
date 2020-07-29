// Never trust user input

// use 'onChange' or 'input' to see if your user do what you want 

myInput.addEventListener('input', function(e) {
    var value = e.target.value;
    if (value.startsWith('Hello ')) {
        isValid = true;
    } else {
        isValid = false;
    }
});