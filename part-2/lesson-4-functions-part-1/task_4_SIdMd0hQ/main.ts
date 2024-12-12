// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент


let dogsBreed: string[] = ['jack russel terrier', 'corgi', 'husky', 'german shepherd'];

function printerArray(array: string[]): void {
    for(let item of array) {
        console.log(item);
    }
}

printerArray(dogsBreed);