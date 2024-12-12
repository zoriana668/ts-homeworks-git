// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let myArray: (string | number | boolean | undefined)[] = ['hi', 2024, false, 'USD', NaN, true, undefined];

let forArr = (array: (string | number | boolean | undefined)[]): void => {
    for(let item of array) {
        console.log(item);
    }
}

forArr(myArray);