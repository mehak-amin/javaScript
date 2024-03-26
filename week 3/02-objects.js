//adding method to object person1

// function Person(name,age,address){
//     this.name= name;
//     this.age = age;
//     this.address = address;
    
   
// }
       

// const person1 = new Person( "mehak" , 23, "chanapora")
// person1.greet = function(){
//     console.log("hello ,mehak");
// }
// person1.greet();
// person1.greet1= function(){
//     return this.name + " " +this.address
// }
// console.log(person1.greet1());

// Adding methods to constructor 
// function Person(name,age,address){
//     this.name= name;
//     this.age = age;
//     this.address = address;
//     this.greet = function(){
//         return this.name + " " +this.address;
//     }
   
// }

// const person1 = new Person( "mehak" , 23, "chanapora")
// console.log(person1);


function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

    this.greet = function() {
        return "Hello, my name is " + this.name + " and I live at " + this.address + ".";
    };

    this.changeAddress = function(newAddress) {
        this.address = newAddress;
        return "Address updated to: " + this.address;
    };
}

// Create a new Person object
const person1 = new Person("mehak", 23, "chanapora");

// Call the greet method
console.log(person1.greet()); // Output: Hello, my name is mehak and I live at chanapora

// Call the changeAddress method
console.log(person1.changeAddress("rambagh")); // Output: Address updated to: rambagh

// Call the greet method again to see the updated address
console.log(person1.greet()); // Output: Hello, my name is John and I live at 456 Oak Ave.
