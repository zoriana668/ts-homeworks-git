// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


class Card {
    cardSuit: 'spade' | 'diamond' | 'heart' | 'clubs';
    value: '6' | '10' | 'ace' | 'jack' | 'queen' | 'king';
    color: 'red' | 'black';

    constructor(cardSuit: 'spade' | 'diamond' | 'heart' | 'clubs', value: '6' | '10' | 'ace' | 'jack' | 'queen' | 'king') {
        this.cardSuit = cardSuit;
        this.value = value;
        this.color = cardSuit === 'heart' || cardSuit === 'diamond' ? 'red' : 'black';
    }
}


// Масив мастей ------
const cardSuits: Array<'spade' | 'diamond' | 'heart' | 'clubs'> = ['spade', 'diamond', 'heart','clubs'];

// Масив значень ------
const values: Array<'6' | '10' | 'ace' | 'jack' | 'queen' | 'king'> = ['6', '10', 'ace', 'jack','queen', 'king'];

// Масив для зберігання карт ------
const cards: Card[] = [];

for(let suit of cardSuits) {
    for(let value of values) {
        const card = new Card(suit, value);
        cards.push(card);
    }
}

console.log(cards);



// 0 {cardSuit: 'spade', value: '6', color: 'black'}
// 1 {cardSuit: 'spade', value: '10', color: 'black'}
// 2 {cardSuit: 'spade', value: 'ace', color: 'black'}
// 3 {cardSuit: 'spade', value: 'jack', color: 'black'}
// 4 {cardSuit: 'spade', value: 'queen', color: 'black'}
// 5 {cardSuit: 'spade', value: 'king', color: 'black'}
// 6 {cardSuit: 'diamond', value: '6', color: 'red'}
// 7 {cardSuit: 'diamond', value: '10', color: 'red'}
// 8 {cardSuit: 'diamond', value: 'ace', color: 'red'}
// 9 {cardSuit: 'diamond', value: 'jack', color: 'red'}
// 10 {cardSuit: 'diamond', value: 'queen', color: 'red'}
// 11 {cardSuit: 'diamond', value: 'king', color: 'red'}
// 12 {cardSuit: 'heart', value: '6', color: 'red'}
// 13 {cardSuit: 'heart', value: '10', color: 'red'}
// 14 {cardSuit: 'heart', value: 'ace', color: 'red'}
// 15 {cardSuit: 'heart', value: 'jack', color: 'red'}
// 16 {cardSuit: 'heart', value: 'queen', color: 'red'}
// 17 {cardSuit: 'heart', value: 'king', color: 'red'}
// 18 {cardSuit: 'clubs', value: '6', color: 'black'}
// 19 {cardSuit: 'clubs', value: '10', color: 'black'}
// 20 {cardSuit: 'clubs', value: 'ace', color: 'black'}
// 21 {cardSuit: 'clubs', value: 'jack', color: 'black'}
// 22 {cardSuit: 'clubs', value: 'queen', color: 'black'}
// 23 {cardSuit: 'clubs', value: 'king', color: 'black'}



// reduce =============================


// let reduce = users.reduce((accumulator, user) => {
//     if(user.status) {
//         accumulator.statT.push(user);
//     } else {
//         accumulator.statF.push(user);
//     }
//     return accumulator;
// }, {statT: [], statF: []});
//
//
// console.log(reduce);
// console.log(users);



// ---- reducer

interface CardReducer {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
}


let cardReducer = cards.reduce<CardReducer>(
    (accumulator, item) => {
    if(item.cardSuit === 'spade') {
        accumulator.spades.push(item);
    } else if(item.cardSuit === 'diamond') {
        accumulator.diamonds.push(item);
    } else if(item.cardSuit === 'heart') {
        accumulator.hearts.push(item);
    } else if(item.cardSuit === 'clubs') {
        accumulator.clubs.push(item);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});


console.log(cardReducer);