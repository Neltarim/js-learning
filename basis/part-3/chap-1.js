// functions
//functions in JS are like variables, they can be mutated.
function add(x, y) {return x + y; }
console.log(add(1,2)); //3

add =  function (x, y) {return x - y; };
console.log(add(1,2));//-1

//if you want your function to be static, you need to declare it as a const
const sub = (x, y) => x - y;
console.log(sub(1, 2));//-1

try {
    sub = function (x, y) {return x + y;}; //3
} catch (error) {
    console.log("Traceback: You can't change a constant function, you maggot.")
}