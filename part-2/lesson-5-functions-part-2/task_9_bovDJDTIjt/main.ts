// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.


class Person {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}


let personArray: Person[] = [
    new Person(1, 'Taras', 56),
    new Person(2, 'Olha', 62),
    new Person(3, 'Viktor', 38),
    new Person(4,'Svitlana', 37)
];

let boxFunc = (array: Person[]): void => {
    for(let item of array) {
        document.write(`<div>ID: ${item.id}, NAME: ${item.name}, AGE: ${item.age}</div>`);
    }
}

boxFunc(personArray);