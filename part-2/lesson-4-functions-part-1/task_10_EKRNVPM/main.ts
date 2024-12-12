// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let numbersArray: number[] = [2, 3, 5, 7, 10];

function sum(arr: number []): number {
    let allSum: number = 0;
    for(let i = 0; i < arr.length; i++) {
        allSum = allSum + arr[i];
    }

    return allSum;
}

console.log(sum(numbersArray));