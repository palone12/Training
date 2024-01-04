const marvel = ["thor", "ironman"];
const dc = ["superman", "flash"];

// bad way of merging

// marvel.push(dc);  // it does not conacat acutally is put as it as aray

console.log(marvel);

// Correct way of conacating

const newHeros = marvel.concat(dc);
console.log(newHeros);

// Using SPread

const alliance = [...marvel, ...dc];

console.log(alliance);

//Flatteing if Array

const anotherArray = [1, 2, [3434, 343], 5, 6, [6, 5, [7, 67], 76]];

const flataArray = anotherArray.flat(Infinity); // Give Infinity as dept if we dont  know the exact depts for flattening

console.log(flataArray);

//Array From Method to make array of given value;

const newArray = Array.from("Pranay");
console.log(newArray);

const score1 = 100;
const score2 = 200;
const score3 = 300;

const newArrayOfScrores = Array.of(score1, score2, score3);

console.log(newArrayOfScrores);
