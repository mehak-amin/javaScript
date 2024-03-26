//constructor functions with parameters 

function Person(name,age,address){
    this.name= name;
    this.age = age;
    this.address = address;
   
}
       

const person1 = new Person( "mehak" , 23, "chanapora")
// console.log(person1);
// console.log(person1.name);
// console.log(Object.keys(person1));
// console.log(Object.values(person1));

// adding new property to object


person1.email= "mehak123@gmail.com"
console.log(person1);


//changing value of a key in object 


// person1.name = "Amit";
// console.log(person1);





