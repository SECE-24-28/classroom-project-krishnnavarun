//Array of Objects
//Array is used to store multiple values in a single variable
//Array can store values of any data type including objects
//Objects are used to store key value pairs

let students = [
    {name:"John", age:18, city:"New York" ,grade:9},
    {name:"Alice", age:19, city:"Los Angeles", grade:10},
    {name:"Bob", age:17, city:"Chicago", grade:8}
];

//accessing
console.log(students);
console.log(students[0]);
console.log(students.name); //undefined
console.log(students[0].name) //John


//task

students.forEach((key) => {
    console.log(`${key.name} is ${key.age} years old`);
});


//find students with greater than grade 8

let res = students.filter((student) => student.grade > 8);
let names = res.map((student) => student.name);
console.log(`Students with grade greater than 8 : ${names.join(", ")}`);