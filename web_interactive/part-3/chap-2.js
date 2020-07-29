// promises

// the promises is better the  callbacks. it allow you to handle an async function
// with then() and catch().

functionThatReturnsAPromises()
    .then(function (data) {
        // Do something with data
        console.log("data is here");
    })
    .catch(function(err) {
        //Do something with error
        console.log("woopsie");
    });

    //it's like a asynchronous try catch.




// Async/Await

async function foo() { /* Asynchronous code */ };
async function bar() { /* Asynchronous code */ };

async function quz() {
    const value1 = await foo();
    const value2 = await bar();

    return value1 + value2;
};