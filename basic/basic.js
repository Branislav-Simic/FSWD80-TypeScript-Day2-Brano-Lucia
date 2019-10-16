var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(firstName, lastName, age, jobTitle) {
        this.firstName = "";
        this.lastName = "";
        this.age = "";
        this.jobTitle = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    person.prototype.out = function () {
        return "Hello there, My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return person;
}());
var fullName = new person("Brano", "Simic", "20", "student");
document.getElementById('doc').innerHTML = fullName.out();
// basic 2 start
var job1 = /** @class */ (function (_super) {
    __extends(job1, _super);
    function job1(firstName, lastName, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, firstName, lastName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    job1.prototype.some = function () {
        return "and i get " + this.salary + " \u20AC every month, and I work in Vienna.";
    };
    return job1;
}(person));
var job = new job1("Brano", "Simic", "20", "student", "800", "Vienna");
document.getElementById('doc').innerHTML += job.some();
// += use by add sentence to other previous sentence!!!
