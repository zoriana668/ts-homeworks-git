// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write


let elements: (number | string | boolean)[] = [22, 'Hello', 'World', true, 2024, false];

function createArrayList (arr: (number | string | boolean)[]): void {
    document.write(`<ul>`);
    for(let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}


createArrayList (elements);