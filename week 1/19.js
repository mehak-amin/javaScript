let array = ['A', 'a', '7', '3', 'p', 'y'];

let vowels = 'A,E,I,O,U,a,e,i,o,u'; 
let consonants = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz'; 
let digits = '0123456789'; 

let vowelCount = 0;
let consonantCount = 0;
let digitCount = 0;

for (let i = 0; i < array.length; i++) {
    
   
    for (let j = 0; j < vowels.length; j++) {    
        if (array[i] === vowels[j]) {
            vowelCount++;
            break; 
        }
    }
    
    for (let k = 0; k < consonants.length; k++) {
        if (array[i] === consonants[k]) {
            consonantCount++;
            break; 
        }
    }
    
    for (let l = 0; l < digits.length; l++) {
        if (array[i] === digits[l]) {
            digitCount++;
            break; 
        }
    }
}

console.log("vowels:", vowelCount); 
console.log("consonants:", consonantCount); 
console.log("digits:", digitCount);
