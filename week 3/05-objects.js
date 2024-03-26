//JAVA SCRIPT ITERATORS 

// const myIterable = {
//     data: [1, 2, 3],
//     [Symbol.iterator]: function() {
//       let index = 0;
  
//       return {
//         next: () => {
//           if (index < this.data.length) {
//             return { value: this.data[index++], done: false };
//           } else {
//             return { done: true };
//           }
//         }
//       };
//     }
//   };
  
//   for (const item of myIterable) {
//     console.log(item);
//   }


// another example

// const myNum = {}; // creating an empty object 
// myNum[Symbol.iterator] = function(){
//     let n = 0 ;
//      let done = false ;
//     return {
//         next(){
//             n+= 10 ;
//             if(n===100){
//                 return {value:n , done:true};
//             }
//             return {value:n , done:false};
//         }
//     };
    
// }


//   for(const item of myNum){
//     console.log(item);
//   }


// ANOTHER EXAMPLE 

// const myNew = {};
// myNew.start = 1;
// myNew.end = 5;
// myNew[Symbol.iterator]=function(){
//     let  current = this.start;
//     const end = this.end;

//     return {
//         next(){
//             if (current <= end){
//                 return {value: current++ , done:false }
    
//             }
//             else{
//                 return{done:true}
//             }
//         }
//     }

// }

// for (const itemm of myNew){
//     console.log(itemm);
// }

// ANOTHER EXAMPLE iterate over a string using simple for ...of loop

// const website = "W3Schools";
// let text = "";
// for (let x of website){
// text+= x + "\n";
// }

// console.log(text);

