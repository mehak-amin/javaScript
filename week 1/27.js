//deletion
let array = [1, 2, 6, 7, 9];
let index = 2;
for (let i = index-1; i < array.length-1; i++){
    array[i] = array[i + 1];
    
 
}

array.length-= 1;
console.log(array);

  