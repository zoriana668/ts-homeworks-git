// #bfoJuse4ZzP
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


let variableStr: string = 'Ревуть воли як ясла повні';

function stringToArray(theString: string): string[] {
    return theString.split(' ');

}


let arr: string[] = stringToArray(variableStr);

console.log(arr);           // ['Ревуть', 'воли', 'як', 'ясла', 'повні']

console.log(stringToArray('Реве та стогне Дніпр широкий'));   // 'Реве', 'та', 'стогне', 'Дніпр', 'широкий']