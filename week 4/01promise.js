// // CREATION OF PROMISES 


// const promiseOne = new Promise( function(resolve,reject){

//     //do any async task like database calls, cryptography or networking tasks
//     setTimeout(function(){
//         console.log("async task is completed");
//         resolve();
//     },3000)

// })
// promiseOne.then(function(){
//     console.log("promise done")
// })
// // the above code can be done in another way 

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2 is completed ") // when this task is completed it will call resolve and resolve is directly connected to .then and thus will run that part.
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("promise 2 done");//
// })

// // CREATING 3RD PROMISE 
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({user:"mehak" , email : "mehak@gmail.com"})

//     },1000)

// })
// promiseThree.then(function(user){
//     console.log(user);

// })
// CREATING 4TH PROMISE 

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//        let error = true;clear

//        if (!error) {
//         resolve({username: "mehak"})
        
//        }
//        else{
//         reject("Something went wrong")
//        }
//     },1000)
// })

// promiseFour
// .then(function(user){
//     return user.username;
// })
// .then(function(usr){    // this is chaining, .then kai andr .then , jo upar walay .then mei value return huwe wohi yaha neechay aaati hai  
//     console.log(usr);
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(()=>{
//     console.log("if the promise is resolved or even if its rejected , this part will still run ")
// })

// CREATING 5TH PROMISE using ASYNC/AWAIT 

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//          resolve({username: "JavaScript", email: "js@example.com"})
         
//         }
//         else{
//          reject("javaScript went wrong")
//         }
//      },1000)
// })
// // async await performs some what like as .then , .catch . ye thoda wait krta ha kaam k hone ka , agr kaam hogaya then it walks ahead otherwise it will give us error there  
// // but it cant directly handle errors.
// async function consumepromise(){
//     const response = await promiseFive
//     console.log(response)

// }  
// consumepromise();

// //async / await this way cant handle errors thus we use try catch method with async 
// const promiseSix = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//          resolve({username: "JavaScript", email: "js@example.com"})
         
//         }
//         else{
//          reject("javaScript went wrong")
//         }
//      },1000)
// })
// async function another(){
//     try {
//         const response = await promiseSix
//        console.log(response)
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// another();

// 6TH PROMISE USING ASYNC/AWAIT  and FETCH





const promiseSix = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", email: "js@example.com" });
        } else {
            reject("javaScript went wrong");
        }
    }, 1000);
});

// async function another() {
//     try {
//         
//         // const fetch = await import('node-fetch');
//         const response = await fetch ("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error:", error); 
//     }
// }

// another();


//  fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json()

// })
// .then((data)=>{
//     console.log(data);

// })
// .catch((error)=>{
//     console.log(error);

// })



promiseSix
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("PromiseSix Error:", error); 
    });

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Fetch Error:", error); 
    });





