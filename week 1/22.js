//pattern 3
let row = 4;
let pattern ='';
console.log("1");
for (let i = 1; i <= row; i++){
    
    for(let j = 0; j <= i; j++){
           
        pattern+= j+1;
        
    }
    
   pattern+= '\n';
    
}
console.log(pattern);