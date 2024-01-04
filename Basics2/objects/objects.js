const person = {
  name: "Pranay",
  email: "alonepranay12334@gmail.com",
  location: "Nagapur",
};

console.log(person["email"]);
console.log(person.name);
const obj = { 1: "a" };
const obj2 = { 2: "b" };

const newObj = Object.assign({}, obj, obj2);
console.log(newObj);

// or bt spreading the objs

const obj3 = { ...newObj, ...person };
console.log(obj3);

//Destructureing

const course = {
  name: "Python",
  fess: 500,
  duration: "6months",
};

const { name } = course;
console.log(name);
