// OBJECT PROTOTYPE 

// // Define a constructor function
// function Person(name) {
//     this.name = name;
// }

// // Create a new object using the Person constructor function
// var john = new Person('John');

// // Use Object.getPrototypeOf() to get the prototype of john
// var prototypeOfJohn = Object.getPrototypeOf(john);

// console.log(prototypeOfJohn); // Output: Person {}

function Person(name , age , address){
    this.name = name;
    this.age = age;
    this.address = address
}
const human = new Person("mehak", 23 , "chanapora");
console.log(human);
// Person.language = "kashmiri";
// console.log(human);

// adding property to object constructor using prototype

Person.prototype.language = "kashmiri"; // this property  is added in the protutype of object now we can acces it
console.log("the language of "+ human.name  + " is " + human.language);

