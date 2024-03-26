//sum of digits
let number = 1223;
let sum = 0;
while(number>0){
  let numbers= number%10;
    sum+= numbers;
number = (Math.floor(number/10));
                                
                                                                                                                                                                            

}
console.log(sum);

