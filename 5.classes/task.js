class PrintEditionItem {
    constructor (name, releaseDate, pageCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pageCount = pageCount;
        this.state = 100;
        this.type = null;
    };

    fix() {
        return this.state * 1.5;
    }
    
    set state(newState) {
      if (newState < 0) {
        this.state = 0;
      } else if (newState > 100) {
            this.state = 100;
      } else { 
          this.state = newState;
      }
    }
    
    get state() {
        return this.state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pageCount) {
        super (name, releaseDate, pageCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pageCount) {
        super (name, releaseDate, pageCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pageCount) {
        super (author, name, releaseDate, pageCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pageCount) {
        super (author, name, releaseDate, pageCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pageCount) {
        super (author, name, releaseDate, pageCount);
        this.type = "detective";
    }
}

class Library {
    constructor (name, books) {
        this.name = name;
        this.books = [];
    };

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
        return this.books;
    }
    
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) return this.books[i];
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) return this.books.splice([i],1)[0];
        }
        return null;
    }
}
