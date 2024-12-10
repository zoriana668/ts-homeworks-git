// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох.
//   Також потрібно врахувати коли введені рівні числа.


const a: number = 5;
const b: number = 10;

if (a > b) {
    console.log(`${a} is bigger digit than ${b}`);
} else if (a < b) {
    console.log(`${b} is bigger digit than ${a}`);
} else if (a === b) {
    console.log(`${a} and ${b} are equal digits`);
} else {
    console.log('It looks like we have some mistake');
}

