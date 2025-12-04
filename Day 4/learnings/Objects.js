//Objects in JavaScript

//Objects are used to store key value pairs
//key is always string
//value can be of any data type
//object is non-primitive data type

let person = {
    name: "John",
    age: 18,
    city: "New York",
    isStudent: true
};

//accessing
console.log(person);
console.log(person["name"]);
console.log(person.name);

//used to access dynamic property and unknown property and stored in variable
const variable = "city";
console.log(person[variable]);

//can be used to access the known property
console.log(person.variable); //undefined


//updating
person.age = 20;
console.log("Updated Age using Dot Notation:", person.age);
console.log(person);

person["age"] = 22;
console.log("Updated Age using Bracket Notation:", person.age);

console.log(person);


//accessing keys and values
//Object.keys() and Object.values()

console.log("Keys:" , Object.keys(person));
console.log("Values:" , Object.values(person));

//entries to get key value pairs
//Object.entries()

console.log("Entries:", Object.entries(person));


//task to print key value pairs using forEach 
//output should be math => 90, science => 80, english => 70

let marks = {
    math: 90,
    science: 80,
    english:70
}

// console.log("math =>", marks.math);
// console.log("science =>", marks.science);
// console.log("english =>", marks.english);

Object.keys(marks).forEach((key) => {
    console.log(`${key} => ${marks[key]}`)
});