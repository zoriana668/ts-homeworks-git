// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


let arr6: number[] = [10,8,-7,55,987,-1011,0,1050,0];

let arrToStr: string[] = arr6.map(itemArr  => itemArr.toString());

console.log(arrToStr);
console.log(typeof arrToStr[0]);