// nested functions 
function  emailGenerator(firstName , lastName){
return function(){
    return `${firstName}${lastName}@gmail.com`;
}
return emailGenerator();
}
let myemail= emailGenerator("mehak","amin");
console.log(myemail());