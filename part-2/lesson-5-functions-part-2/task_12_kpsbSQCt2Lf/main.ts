// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arrNumbers: number[] = [11, 22, 33,44];

let swapFunc = (arr: number[], index1: number, index2: number): number[] => {
    let box = arr[index1];

    arr[index1] = arr[index2];

    arr[index2] = box;

    return arr;


}

console.log(swapFunc(arrNumbers, 0, 1)); // [22,11,33,44]