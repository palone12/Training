const marvel = ["thor", "ironman"];
const dc = ["superman", "flash"];

// bad way of merging

// marvel.push(dc); // it does not conacat acutally is put as it as aray

console.log(marvel);

// Correct way of conacating

const newHeros = marvel.concat(dc);
console.log(newHeros);

// Using SPread

const alliance = [...marvel, ...dc];

console.log(alliance);
