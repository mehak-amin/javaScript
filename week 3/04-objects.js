// OBJECT ACCESSORS (GETTER AND SETTER)

//getter 

const object ={
    name: "mehak",
    address : "chanapora",
    age :23,
    language : "kashmiri",
    get agen(){
        return this.age *2;
    }
    
}
console.log(object.agen);
console.log(object.language);

// setter 

const object1 ={
    name: "mehak",
    address : "chanapora",
    age :23,
    language : "",
    
    
}
object1.language = "urdu";
console.log(object1);

