// conditions if else

let bool = true;

if (bool) {
    console.log("Boolean is true");
} else {
    console.log("Boolean is false");
}

// operators

let nbr = 30;
let nbr2 = 20;

if (nbr < nbr2) {
    console.log("it's fiiine");
} else if (nbr == nbr2) {
    console.log("it's time to stop now.");
} else {
    console.log("THIS IS NOT OKAYY");
}

//remember that old meme on the type coercion?
// this is now the time to know how to avoid that.
if (nbr === nbr2)  {
    console.log("yeah")
}


// remember to use ||, && instead of 'or' 'and' in python.
// the != is '!nbr' 


// variables init in a block (conditions etc) is only available in this block and 
// child's blocks.



// switchs (i messed you so much buddy, python was mean with you)
let lvl = 'premium';

switch (lvl) {
    case 'normal':
        console.log("welcome, dirty peasant.");
        break;

    case 'premium':
        console.log("Welcome sir !");
        break;

    default:
        console.log('HEY GET OUT OF HERE');
}