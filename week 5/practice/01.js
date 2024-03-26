
/* => First-Class Citizens: In JavaScript, functions are treated as first-class citizens, 
meaning they can be assigned to variables, passed as arguments to other functions, 
returned from functions, and stored in data structures like arrays or objects.

=> Method is a function that is defined as a property of an object. When you call a method, 
you're essentially invoking that function that's attached to the object.

*/

//  --------- Passing function as an argument --------------------

setTimeout(function () {
    console.log("hello")
    
},1000)
//_______________________________________________________________________________
//------------------ passed as arguments to other functions----------------------

function multiplyByTwo(n, callback) {
    var result = n * 2;
    callback(result);
  }
  
  function logResult(result) {
    console.log(result);
  }
  
  multiplyByTwo(5, logResult)


// ------------------FUNCTION APPLY--------------------------
/* the main difference between call() and apply() is how they handle passing arguments: 
call() expects arguments to be passed individually, while apply() expects them as an array.*/
const person = {
    fullname : function(){
        console.log(this.firstName +this.lastName); 
    }
}
const person1 ={

firstName : "mehak ",
lastName : "Amin"
}
person.fullname.apply(person1);

//  -----------------------FUNCTION BIND()-----------------------------
/*  With the bind() method, an object can borrow a method from another object.
we use the bind() method in JavaScript to make sure that when a function is called, 
the this keyword inside it always refers to a particular object, no matter how or where the function is called.*/





