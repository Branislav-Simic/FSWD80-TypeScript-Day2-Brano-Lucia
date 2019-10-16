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
