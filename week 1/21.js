//pattern 2
let row = 4;
let pattern ='';
for (let i = 4; i >= 1; i--){
    for(let j = 1; j <= i; j++){
        pattern+= '*';

    }
   pattern+= '\n' ;
   
    

    
}
console.log(pattern);