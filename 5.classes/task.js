class PrintEditionItem {
    constructor (name, releaseDate, pageCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pageCount = pageCount;
        this.state = 100;
        this.type = null;
    }
}

fix() {
    return this.state * 1.5;
}

set state(newstate) {
  if (newstate < 0) {
    this.state = 0;
  } else if (newstate > 100) {
        this.state = 100;
  } else { 
      this.state = newState;
  }
}

get state() {
    return this.state;
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pageCount, state, type) {
        super (name, releaseDate, pageCount, state);
        this.type = magazine;
    }
}

class Book extends PrintEditionItem {
    constructor (name, releaseDate, pageCount, state, type, author) {
        super (name, releaseDate, pageCount, state);
        this.type = type;
        this.author = author;
    }
}

class NovelBook extends PrintEditionItem {
    constructor (name, releaseDate, pageCount, state, type, author) {
        super (name, releaseDate, pageCount, state);
        this.type = novel;
        this.author = author;
}

class FantasticBook extends PrintEditionItem {
    constructor (name, releaseDate, pageCount, state, type, author) {
        super (name, releaseDate, pageCount, state);
        this.type = fantastic;
        this.author = author;
}

class DetectiveBook extends PrintEditionItem {
    constructor (name, releaseDate, pageCount, state, type, author) {
        super (name, releaseDate, pageCount, state);
        this.type = detective;
        this.author = author;
}

class Library {
    constructor (name, books) {
        this.name = name;
        this.books = [];
    }
}

addBook(book) {
    if (book.state > 30) {
        this.books.push(book);
    }
}

findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
        for (const prop in this.books[i]) {
            if (prop === type && this.books[i][prop] === value) {
                return this.books[i];
            } else {
                return null;
            }
        }
    }
}