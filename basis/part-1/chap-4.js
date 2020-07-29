// ARRAY is the python list in js

let guests = ['sarah', 'kate', 'jim'];
console.log(guests);
console.log(guests[0]);

guests[0] = 'bill';
console.log(guests);

// append an array with 'push'
guests.push('last guest');

//append a the beggining of the array with 'unshift'
guests.unshift('first guess');
console.log(guests)

//delete the last element with 'pop'
guests.pop()

// if you stock an object in an array and change he's values after,
// the values in the array will changes too.
// You stock the reference, not a static copy :

admin = {
    name: 'kyurann'
};

let guests2 = [admin];
console.log(guests2);

admin.name = 'neltarim';
console.log(guests2);

//note: stock the value instead of the reference.




// TO KNOW MORE ABOUT THE set AND map
// fuckin google it