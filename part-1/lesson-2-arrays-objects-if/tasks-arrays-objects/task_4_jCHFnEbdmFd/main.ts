// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


interface IUser {
    name: string;
    userName: string;
    password: string
}


let user1: IUser = {
    name: 'Taras',
    userName: 'Taras77',
    password: '12345'
};

let user2: IUser = {
    name: 'Olha',
    userName: 'OlhaKobilyanska',
    password: 'qwerty12'
};

let user3: IUser = {
    name: 'Katya',
    userName: 'Katya_Blyostka777',
    password: 'security_123'
};

let user4: IUser = {
    name: 'Oksana',
    userName: 'princess',
    password: 'flower-power-444'
};

let user5: IUser = {
    name: 'Yulian',
    userName: 'Yulik_$',
    password: 'kitty_@123'
};

let user6: IUser ={
    name: 'Liza',
    userName: 'Elizabeth_queen',
    password: 'password_456'
};

let user7: IUser = {
    name: 'Markiyan',
    userName: 'Marky_678',
    password: 'dnd_forever'
};

let user8: IUser = {
    name: 'Mariia',
    userName: 'Mariia_B',
    password: `programmer_#`
};

let user9: IUser = {
    name: 'Vasyl',
    userName: 'Pokemon5',
    password: 'anime111'
};

let user10: IUser = {
    name: 'Tetyana',
    userName: 'tetyanka_14',
    password: 'qwerty563'
}

let userArr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];

// console.log(userArr);

console.log(userArr[0].password);

console.log(userArr[1].password);

console.log(userArr[2].password);

console.log(userArr[3].password);

console.log(userArr[4].password);

console.log(userArr[5].password);

console.log(userArr[6].password);

console.log(userArr[7].password);

console.log(userArr[8].password);

console.log(userArr[9].password);