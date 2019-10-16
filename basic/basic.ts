class person {
	firstName="";
	lastName="";
	age="";
	jobTitle="";
	constructor(firstName,lastName,age,jobTitle){
		this.firstName=firstName;
		this.lastName=lastName;
		this.age=age;
		this.jobTitle=jobTitle;
	}
	out(){
		return `Hello there, My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
	}
	
}

var fullName = new person("Brano","Simic","20","student");

document.getElementById('doc').innerHTML= fullName.out();



