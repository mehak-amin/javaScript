// arm strong number

let number = 153;
let a = 153;
sum = 0;
while(a>0){
    let b = a%10;

    sum+= b *b *b ;                                                  
    a = Math.floor(a/10);
}
if(sum==number){
    console.log("its an armstrong number");
}
else{
    console.log("its not an armstrong number ");
}
