// Async JS Programming
// Callbacks, Promises, Async & Await

// Array of object
// const datas=[
//     {name:"Shubham",Profession:"Soft"}
// ]




// for-in , for-of 

// array is a datatype in JS which can store values of different data type

let arr = ["John", 12, 0.5, { id: 1, name: "doe" }];
// let arr2 = [1,2,2,3,54,56,734];

// for (const value of arr) {
//     console.log("of" ,value);
// }




// let str = "Newton School MERN Stack Development";
// console.log(str.indexOf("N"));
// console.log(str.charAt(7));
// console.log(str.replace("Newton", "P"));
// console.log(str.includes("Newton"));
// console.log(str.endsWith("ment"));

// reverse a string 
// School Newton

// convert it to an array = split
// reverse that array  = reverse
// convert back to string = join
// const arraySplit = str.split("");
// console.log(arraySplit);
// const arraySplitReverse= arraySplit.reverse();
// console.log(arraySplitReverse);
// console.log(arraySplitReverse.join(""));
// const temp = str.split("").reverse().join("");
// console.log(temp);



const user = [
    { id: 1, name: "John", age: 20, salary: 35000 },
    { id: 2, name: "Doe", age: 24, salary: 20000 }
]

const newUser = user.map(value => ({ ...value, age: 10 }));
console.log(newUser, user)