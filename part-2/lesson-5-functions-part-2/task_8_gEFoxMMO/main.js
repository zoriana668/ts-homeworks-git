// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів
// (числа, стрінги, булеві), та будує для них список
let elementsArr = [22, 'Hello', 'World', true, 2024, false];
let createTheseList = (array) => {
    document.write(`<ul>`);
    for (let item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
};
createTheseList(elementsArr);
