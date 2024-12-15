// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
var Card = /** @class */ (function () {
    function Card(cardSuit, value) {
        this.cardSuit = cardSuit;
        this.value = value;
        this.color = cardSuit === 'heart' || cardSuit === 'diamond' ? 'red' : 'black';
    }
    return Card;
}());
// Масив мастей ------
var cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
// Масив значень ------
var values = ['6', '10', 'ace', 'jack', 'queen', 'king'];
// Масив для зберігання карт ------
var cards = [];
for (var _i = 0, cardSuits_1 = cardSuits; _i < cardSuits_1.length; _i++) {
    var suit = cardSuits_1[_i];
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        var card = new Card(suit, value);
        cards.push(card);
    }
}
console.log(cards);
var cardReducer = cards.reduce(function (accumulator, item) {
    if (item.cardSuit === 'spade') {
        accumulator.spades.push(item);
    }
    else if (item.cardSuit === 'diamond') {
        accumulator.diamonds.push(item);
    }
    else if (item.cardSuit === 'heart') {
        accumulator.hearts.push(item);
    }
    else if (item.cardSuit === 'clubs') {
        accumulator.clubs.push(item);
    }
    return accumulator;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });
console.log(cardReducer);
