// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currencyBox = null;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            currencyBox = currencyValues[i];
            break;
        }
    }
    if (currencyBox === null) {
        return `Currency ${exchangeCurrency} is not found`;
    }
    let resultExchange = sumUAH / currencyBox.value;
    return resultExchange;
}
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
