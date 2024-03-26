//Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

let limit = 50;
let  a = 0;
let b = 1;
let fseq = [a , b] ;
let esum = 0;

while(b<limit){
    let sum = a + b;
    if(sum%2==0 ){
    esum += sum;
    }
   
    a=b;
    b=sum;

}
console.log(esum);