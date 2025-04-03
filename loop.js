// for loop

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let i = 1; i<5; i++) {
//     console.log(i);
// }

// let fruits = ["Apple", "Banana", "Cherry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 5; i++) {
//     console.log("Number:", i);
// }

// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//     sum += i; 
// }

// console.log("Total Sum:", sum);

// //while loop

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// let j = 1;
// while (j < 5) {
//     console.log(j);
//     j++;
// }

// let k = 0;
// let len = fruits.length;                    
// while (k < len) {
//     console.log(fruits[k]);
//     k++;
// }

// let l = 1;  
// while (l <= 10) {
//     if (l % 2 === 0) {
//         console.log(l);
//     }
//     l++;
// }

// let m = 1;                                  
// while (m <= 5) {
//     console.log("Number:", m);
//     m++;
// }

// let n = 1;
// let totalSum = 0;   
// while (n <= 5) {
//     totalSum += n;
//     n++;
// }
// console.log("Total Sum:", totalSum);

// let num = 2;

// while (num <= 10) { 
//     console.log(num);
//     num += 2;
// }

// let countdown = 5;
// while (countdown >= 0) {
//   console.log(countdown);
//   countdown--;
// }
// console.log("Blast off!");

// // do while loop

// let i = 0;
// do {
//     console.log(i); 
//     i++;
// } while (i < 5);

// let count = 0;


// do {
//     if (count === 3) break; 
//     console.log(count);
//     count++;
// } while (count < 5);


// let j = 1;
// do {
//     console.log(j); 
//     j++;
// }while (j < 5);


// let k = 0;
// let fruits = ["Apple", "Banana", "Cherry"];
// do {
//     console.log(fruits[k]);
//     k++;
// }while (k < fruits.length); 


//for in loop

// const person = {
//     name: "Alice",
//     age: 25,
//     city: "New York"
// };

// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }


// const colors = ["Red", "Green", "Blue"];

// for (let index in colors) {
//     console.log(index + ": " + colors[index]);
// }

// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 }
// ];

// for (let i in users) {
//     console.log("User " + (parseInt(i) + 1) + ":");
//     for (let key in users[i]) {
//         console.log(key + ": " + users[i][key]);
//     }
// }

// for of loop

// const colors = ["Red", "Green", "Blue"];

// for (let color of colors) {
//     console.log(color);
// }

// const person = {
//     name: "Alice",   
//     age: 25,
//     city: "New York"
// };
// for (let key of Object.keys(person)) {
//     console.log(key + ": " + person[key]);
// }

// const numbers = [10, 20, 30, 40];

// for (const num of numbers) {
//     console.log(num);
// }


// for in loop
// const person = { name: "John", age: 30, city: "New York" };

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// const person = {
//     name: "Alice",
//     age: 25,
//     city: "New York"
// };

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// const numbers = [10, 20, 30, 40];

// for (let index in numbers) {
//     console.log(`Index: ${index}, Value: ${numbers[index]}`);
// }

//for each loop

// const numbers = [10, 20, 30, 40];

// numbers.forEach((num) => {
//     console.log(num);
// });

// const fruits = ["Apple", "Banana", "Cherry"];

// fruits.forEach((fruit, index) => {
//     console.log(`Index: ${index}, Fruit: ${fruit}`);
// });