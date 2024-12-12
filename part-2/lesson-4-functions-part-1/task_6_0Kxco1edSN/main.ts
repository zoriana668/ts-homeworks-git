// #0Kxco1edSN
// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write


function createList(liText: string, quantityLi: number): void {
    document.write(`<ul>`);
    for(let i: number = 0; i < quantityLi; i++) {
        document.write(`<li> ${liText} </li>`);
    }

    document.write(`</ul>`);
}

createList('Hello World!', 4);

createList('This is test message', 7);
