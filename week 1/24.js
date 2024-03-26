let row = 4;
let pattern = '';
let pattern1 = '';


for (let i = 1; i <= row-1; i++){
    for (let j = row; j > i; j--) {
        pattern1 += ' ';
    }
    for(let j = 1; j <= 2*i-1; j++){
        pattern1+= '*';

    }
   pattern1+= '\n';
   
}
for (let i = 1; i <= row - 1; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += ' ';
    }
    for (let j = 1; j <= 2 * (row - i) - 1; j++) {
        pattern += '*';
    }
    pattern += '\n';
}



console.log(pattern1 + pattern);