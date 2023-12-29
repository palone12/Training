console.log("Hello World");

// Variable in JS - Container to store value

const firstName = "Pranay";
const lastName = "Alone";

const accountId = 12121;
const email = "alonepranay123@gmail.com";
var password = "****";
let userName = "Palone23";

console.table([firstName, lastName, accountId, email, password, userName]);

// Data Types In Javascript
// Primitive -  Number , String , Boolean , Null, Undefined , bigInt ,
// Non - Primitive - Objects

console.log("Hello Javascript");

// Function in Javascript

function printMyName(name) {
  console.log("Hello my name is --->  " + name);
}

printMyName("Pranay");

// Strings in Javascript

const nameOfPerson = "Pranay Alone"; // Using Single Quote
const nameoFPerson2 = "Anjali Joshi "; // Using Double Quote

const anotherName = new String("small");
console.log(anotherName.toUpperCase());
console.log(anotherName);

// Usage of Backticks

console.log(`${nameoFPerson2} is friend of ${nameOfPerson}`);
console.log(anotherName);

// Memeory in Jacascript

// Stack - Used for Primitive Data type
// Heap - Used for non primitive data type

// Numbers and Maths in Javascript

const score = 232;
const balance = new Number(32);

console.log(Math.abs(-4)); // Convert negative to positve and not vice versa
console.log(Math.round(4.6));
//Choosing Top Value

console.log(Math.ceil(2.1));
//choosing lower value
console.log(Math.floor(2.1));

// Dates in Javascript
// Date is of type Object**
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toTimeString());
