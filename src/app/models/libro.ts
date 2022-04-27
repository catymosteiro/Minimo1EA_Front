export class Libro {
    _id?: number;
    title: string;
    ISBN: string;
    description: string;
    author: string;

    constructor(ISBN: string, title: string, description: string, author: string) {
        this.title = title;
        this.ISBN = ISBN;
        this.description = description;
        this.author = author;
    }   
}
