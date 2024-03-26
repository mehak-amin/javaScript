//nested functions

function passwordChecker(passwordLength){
    return function (password){
        return password.length  >= passwordLength
    };
   
    
}
let my_password = passwordChecker(8);
console.log(my_password("me"));
console.log(my_password("mehakkjgfgfgffffdr"));

