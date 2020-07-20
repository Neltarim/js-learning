// 'for'

// first argument = the index
// second argument = condition to continue
// third argument = index iteration

nbr = 10;

for (let i = 0; i <= nbr; i++) {
    console.log('i=' + i);
}

// work on tables with 'for in' and 'for of'

const passengers = [
    "bill",
    "sarah",
    "tyler",
    "audrey"
]

for (let i in passengers) {
    console.log("new passenger: " + passengers[i]);
} // when you need the index

for (let passenger of passengers) {
    console.log("new passenger : " + passenger);
} // this is when the index is not usefull

// (side note: python is better to loop)


// 'while'
let seats = 10;
let needSeats = 8;

let seated = 0;

while (seats > 0 && needSeats > 0) {
    seated++;
    needSeats--;
    seats--;
} //classic while loop