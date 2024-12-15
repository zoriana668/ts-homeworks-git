// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
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
// піковий туз
console.log(cards.find(function (card) { return card.value === 'ace' && card.cardSuit === 'spade'; }));
// всі шістки
console.log(cards.filter(function (card) { return card.value === '6'; }));
// - всі червоні карти
console.log(cards.filter(function (card) { return card.color === 'red'; }));
// всі буби
console.log(cards.filter(function (card) { return card.cardSuit === 'diamond'; }));
// всі трефи від 9 та більше
console.log(cards.filter(function (card) {
    return card.cardSuit === 'spade' && (card.value === '10' || card.value === 'jack' || card.value === 'queen' || card.value === 'king' || card.value === 'ace');
}));
