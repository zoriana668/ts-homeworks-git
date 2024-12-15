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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Course = /** @class */ (function () {
    function Course(title, monthDuration) {
        this.title = title;
        this.monthDuration = monthDuration;
    }
    return Course;
}());
var filteredCourse = /** @class */ (function (_super) {
    __extends(filteredCourse, _super);
    function filteredCourse(title, monthDuration, id) {
        var _this = _super.call(this, title, monthDuration) || this;
        _this.id = id;
        return _this;
    }
    return filteredCourse;
}(Course));
var coursesAndDurationArray = [
    new Course('JavaScript Complex', 5),
    new Course('Java Complex', 6),
    new Course('Python Complex', 6),
    new Course('QA Complex', 4),
    new Course('FullStack', 7),
    new Course('Frontend', 4)
];
// фільтрація, сортування й додавання ID
var filteredArr = coursesAndDurationArray.sort(function (a, b) { return b.monthDuration - a.monthDuration; })
    .filter(function (value) { return value.monthDuration > 5; })
    .map(function (value, index) { return new filteredCourse(value.title, value.monthDuration, index + 1); });
console.log(filteredArr);
