// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.



// визначення інтерефейсу -----
interface IBook {
    title: string;
    pageCount: number;
    genre: string;
}

// ----------------------------


let obj1: IBook = {
    title: 'Tiger hunters',
    pageCount: 292,
    genre: 'Adventure novel'
};

let obj2: IBook = {
    title: 'The conotopian witch',
    pageCount: 524,
    genre: 'Satirical and realistic story'
};

let obj3: IBook = {
    title: 'The Kaydash family',
    pageCount: 264,
    genre: 'Realistic social and everyday story'
}