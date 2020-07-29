// ASYNCHRONOUS

// you can do this by executing your functions in the setTimeout function.
// it will execute all the functions but the global feed of execution will not be
// blocked. (why the fuck are we using this instead of multi-threading?)

setTimeout(function () {
    console.log("I'm here !")
}, 5000);

console.log("where are you?")

//this will execute the result after the timeout. See event loop for more infos.

//see also 'setInterval' and 'setImmediate'.