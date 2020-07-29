export class Book {
    constructor (title, author, description, pages) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;

        this.currentPage = 1;
        this.read = false;
    }

    readBook(page) {
        if (page < 1 || page > this.pages) { return 0}

        if (page >= 1 && page < this.pages) {
            this.currentPage = page;
            return 1
        }

        if (page === this.pages) {
            this.currentPage = page;
            this.read = true;
            return 1
        }
    }
}

let book1 = new Book("blip", "blop", "bloup", 140);
let book2 = new Book("edfgg", "wesrdf", "wesdfx", 120);
let book3 = new Book("wer", "hbg", "wesrd", 40);

export const books = [book1, book2, book3];


//      TIME 10min03