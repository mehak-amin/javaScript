//Find the sum of all the multiples of 3 or 5 below 1000


let i;
let sum = 0;
for( i = 1; i < 1000; i++ ){
    if( i%3==0 || i%5==0){
        sum+= i;
    }
    
}
console.log(sum);