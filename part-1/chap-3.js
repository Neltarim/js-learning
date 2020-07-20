// primary classes, seems like dict in python

let myBook = {
    title: 'The story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};

// get on this class
let title = myBook.title;
let pages = myBook.numberOfPages;


// class with constructor

class Book {
    constructor(title, author, pages){ // __init__
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

let newBook = new Book("my story", "toto", 250); //new instance
console.log(newBook)