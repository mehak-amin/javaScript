// JAVASCRIPT SETS 

//const num =  new Set ([1 , 2, 3, 4, 5]); // creating set 

// console.log(num);
// const  num2 = new Set ();
//  num2.add("mehak");
//  num2.add("amit");
//  num2.add(190015);
//  num2.add(190015);
//  num2.delete("mehak");
 
// console.log(num2.has("mehak"));
//  console.log(num2);

// let text = "";
// num.forEach(function(num1){
//     text+= num1 +"\n"

// })
//  const iterator = num.values();
// // console.log(text);
// for (const value of iterator) {
//     console.log(value);
//   }


// sets entries

const letters = new Set(["a","b","c"]);

// List all entries
const iterator = letters.keys();
let text = "";
for (const key of iterator) {
  text += key + "\n";
}

console.log(text);

