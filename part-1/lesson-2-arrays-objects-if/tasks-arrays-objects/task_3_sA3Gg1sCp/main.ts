// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

interface IAuthor {
    name: string;
    age: number
}

interface IBook {
    title: string;
    pageCount: number;
    genre: string,
    author: IAuthor[];
}



let obj1: IBook = {
    title: 'Signature of All Things',
    pageCount: 512,
    genre: 'Novel',
    author: [
        {
            name: "Elizabeth Gilbert",
            age: 55
        }
    ]
};

let obj2: IBook = {
    title: 'By situations',
    pageCount: 288,
    genre: 'psychological realism',
    author: [
        {
            name: 'Olha Kobylyanska',
            age:  160
        }
    ]
};

let obj3: IBook = {
    title: 'The manipulator',
    pageCount: 464,
    genre: 'Fiction',
    author: [
        {
            name: 'Ivan Franko',
            age: 168
        }
    ]
}