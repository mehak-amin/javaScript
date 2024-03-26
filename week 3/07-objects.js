// JAVASCRIPT MAPS

// Create a new Map
// const myMap = new Map();

// // Add key-value pairs to the map in a specific order
// myMap.set("a", 1);
// myMap.set("b", 2);
// myMap.set("c", 3);

// // Iterate over the map and log the key-value pairs
// for (const [key, value] of myMap) {
//   console.log(key, value);
// }

// // Add a new key-value pair to the map
// myMap.set("d", 4);

// // Iterate over the map again and log the key-value pairs
// for (const [key, value] of myMap) {
//   console.log(key, value);
// }



// another example

// Create a Map where object keys map to values
const myMap = new Map();

// Create two objects
const obj1 = { id: 1 };
const obj2 = { id: 2 };

// Set values using objects as keys
myMap.set(obj1, "value 1");
myMap.set(obj2, "Value 2");

// Retrieve values using objects as keys
console.log(myMap.get(obj1)); // Output: Value 1
console.log(myMap.get(obj2)); // Output: Value 2
