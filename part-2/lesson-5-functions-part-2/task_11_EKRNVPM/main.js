// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let digitArray = [1, 2, 10];
let sumFunc = (arr) => {
    let boxValue = 0;
    for (let i = 0; i < arr.length; i++) {
        boxValue = boxValue + arr[i];
    }
    return boxValue;
};
console.log(sumFunc(digitArray));
console.log(sumFunc([3, 55, 79, 21]));
