// fibnocci 

let limit = 50;
let  a = 0;
let b = 1;
let fseq = [a , b] ;


while(b<limit){
    let sum = a + b;
    fseq.push(sum);
   
    a=b;
    b=sum;

}
console.log(fseq);