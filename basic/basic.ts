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


// basic 2 start

class job1 extends person {
	salary;
	jobLocation;

	constructor (firstName,lastName,age,jobTitle,salary,jobLocation){
		super(firstName,lastName,age,jobTitle);
		this.salary=salary;
		this.jobLocation=jobLocation;
	}
	some(){
		return `and i get ${this.salary} € every month, and I work in Vienna.`;
	}
}

var job = new job1("Brano","Simic","20","student","800","Vienna");
document.getElementById('doc').innerHTML += job.some();  
// += use by add sentence to other previous sentence!!!




