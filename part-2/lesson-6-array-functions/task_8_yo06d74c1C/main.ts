// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


class Course {
    title: string;
    monthDuration: number;

    constructor(title: string, monthDuration: number) {
        this.title = title;
        this.monthDuration = monthDuration;
    }
}

class filteredCourse extends Course {
    id: number;

    constructor(title: string, monthDuration: number, id: number) {
        super(title, monthDuration);
        this.id = id;
    }
}



let coursesAndDurationArray: Course[] = [
    new Course('JavaScript Complex', 5),
    new Course('Java Complex', 6),
    new Course('Python Complex', 6),
    new Course('QA Complex', 4),
    new Course('FullStack', 7),
    new Course('Frontend', 4)
];


// фільтрація, сортування й додавання ID
let filteredArr: filteredCourse[] = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
    .filter((value) => value.monthDuration > 5)
    .map((value, index) => new filteredCourse(value.title, value.monthDuration, index +1));

console.log(filteredArr);