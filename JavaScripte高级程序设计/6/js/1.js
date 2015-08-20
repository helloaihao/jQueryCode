// var person = {
// 	name: "aihao",
// 	age: 29,
// 	job: "Software Engineer",

// 	sayName: function() {
// 		alert(this.name);
// 	}
// }

// *createPerson

// function createPerson(name, age, job) {
// 	var o = new Object();
// 	o.name = name;
// 	o.age = age;
// 	o.job = job;
// 	o.sayName = function() {
// 		alert(this.name);
// 	}
// 	return o;
// }



// *constructor

// function Person(name, age, job) {
// 	this.name = name;
// 	this.age = age;
// 	this.job = job;
// 	this.sayName = function() {
// 		alert(this.name);
// 	}
// }

// *prototype

// function Person() {} {

// }

// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job =  "Software Engineer";
// Person.prototype.sayName = function() {
// 	alert(this.name);
// }



// var person1 = new Person();
// var person2 = new Person();

// person1.name = "aihao";
// person1.sayName();
// delete person1.name;
// person1.sayName();

// //inheritance

// function SuperType(name) {
// 	this.name = name;
// 	this.colors = ["red", "blue", "green"];
// }

// SuperType.prototype.sayName = function() {
// 	alert(this.name);
// };

// function SubType(name, age) {
// 	SuperType.call(this, name);
// 	this.age = age;
// }

// SubType.prototype = new SuperType();

// SubType.prototype.sayAge = function() {
// 	alert(this.age);
// };

// var instance1 = new SubType("Nicholas", 29);
// instance1.colors.push("back");
// alert(instance1.colors);
// instance1.sayName();
// instance1.sayAge();

// var instance2 = new SubType("Greg", 27);
// alert(instance2.colors);
// instance2.sayName();
// instance2.sayAge();

// //bibao
// var name = "the Window";
// var object = {
// 	name: "my object",
// 	getNameFunc:function(){
// 		return function() {
// 			alert(this.name);
// 			return this.name;
// 		};
// 	}
// }

// alert(object.getNameFunc()());

function MyObject() {
	var privateVariable = 10;
	function privateFuntion() {
		return false;
	}
}

var o = new MyObject();
//o.privateVariable = 20;
alert(privateFuntion());