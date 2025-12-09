/*
-rest operator in array destructuring
-rest oprator can be used only at the last position
-destructuring is a way to unpack values from arrays or properties from objects into distinct variables.
*/


//destructuring arrays with rest operator
const arr = [1,2,3,4,5]
const [a,b,...rest] = arr;
console.log(rest); // [3,4,5]


const [c,,d,,e] = arr
console.log(c,d,e); // 1 3 5

const color = ["red","green","blue"];
const[first,second] = color;
console.log(first); // red
console.log(second); // green


console.log("-----------------------------");


//destructuring objects with rest operator

const person = {
    name: "John",
    age: 30,
    city: "New York",   
    profession: "Developer"
};

const {name,age,...balance} = person;
console.log(name); // John
console.log(age); // 30
console.log(balance); // { city: 'New York', profession: 'Developer' }

//default values in destructuring objects;

//personName is an alias name and we must access the name property using personName variable
const {name:personName, country="USA"} = person;
console.log(personName); // John
console.log(country); // USA