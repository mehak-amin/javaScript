// palindrome
let i = "levelevel"
let strLen= i.length;
let palindrome= true;

for (let a = 0; a < strLen/2 ;a++){
//console.log(strLen-1);}
 if(i[a] !== i[(strLen-1-a)]){
      palindrome= false;
    
  break;
}
}
  
    
    console.log(palindrome);
  


