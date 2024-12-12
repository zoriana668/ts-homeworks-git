// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange
// (10000,
// [{currency:'USD',value:40},{currency:'EUR',value:42}],
// 'USD') // => 250
class CurrencyValue {
    constructor(currency, value) {
        this.currency = currency;
        this.value = value;
    }
}
let exchangeFunc = (sumUAH, currencyValues, exchangeCurrency) => {
    let myCurrency;
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            myCurrency = item;
        }
    }
    let resultExchange = sumUAH / myCurrency.value;
    return resultExchange;
};
console.log(exchangeFunc(10000, [new CurrencyValue('USD', 40), new Currency('EUR', 42)], 'EUR'));
