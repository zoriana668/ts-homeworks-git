// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
var arr6 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
var arrToStr = arr6.map(function (itemArr) { return itemArr.toString(); });
console.log(arrToStr);
console.log(typeof arrToStr[0]);
