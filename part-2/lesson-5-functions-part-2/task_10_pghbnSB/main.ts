// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


let arrayOfNumbers: number[] = [3, 456, 111, 5, 1785, 1];

let retSmallNum = (array: number[]): number => {
    let minimalNum = array[0];

    for(let i = 1; i < array.length; i++) {
        let num = array[i];
        if(num < minimalNum) {
            minimalNum = num;
        }
    }

    return minimalNum;
}

console.log(retSmallNum(arrayOfNumbers));