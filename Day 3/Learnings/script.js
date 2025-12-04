//function declaration - old way
function add(a,b){
    return a+b;
}
console.log(add(1,2));


//function expression - old way
var multiply = function(a,b){
    return a*b;
}
console.log(multiply(2,3));


//ES6 feature - ECMASript 6(2015)
//best way to approach functions
var subtract = (a,b) => {
    return a-b;
}
console.log(subtract(2,1));


//if there is only one line of code we can remove the curly braces and return keyword
var divide = (a,b) => a/b;
console.log(divide(6,2));


//if there is only one parameter we can remove the parenthesis also
var square = a => a*a;
console.log(square(4));


//for loop example
for(let i = 1; i<=5; i++){
    console.log(i);
}


//print even numbers from 2 to 20
for(let i = 2; i<=20; i+=2){
    console.log("Number : ", i);
}

console.log("______________________________")

//while loop example
let j = 1;
while(j<5){
    console.log("While Loop Number : ", j);
    j++;
}


//even numbers from 2 to 20 using while loop
let k = 2;
while(k < 20){
    console.log("Even Numbers:",k);
    k += 2;
}


console.log("______________________________")




let arr = [1,true,"hello",13,5.5];

console.log("Array Length:", arr.length);
for(let i = 0; i< arr.length; i++){
    console.log("Array Element:", arr[i]);
}




console.log("______________________________")


//create an array of size 10 and no elements assigned
let newArr = new Array(10);


//array methods

let array = [10,'JavaScript',30,4.1,'Hello'];

array.push(60); //adds element at the end
console.log("After Push:", array);

array.pop(); //removes element from the end
console.log("After Pop:", array);

array.unshift('Unshift'); //adds element at the beginning
console.log("After Unshift:", array);

array.shift(); //removes element from the beginning
console.log("After Shift:", array);

let index = array.indexOf(30); //returns index of the element
console.log("Index of 30:", index);



console.log("______________________________")



//higher order functions

function a(arg1,arg2,arg3){
    console.log("Function a called " + arg2);
    arg1(arg3);
}

function b(num){
    console.log("Function b called " + num);
}

a(b,10,20);


console.log("______________________________")


function higherOrderFunction(factor){
    return function(num){
        return num * factor;
    };
}

let multiplyBy2 = higherOrderFunction(2);
let multiplyBy3 = higherOrderFunction(3);

console.log(multiplyBy2(5)); // Output: 10
console.log(multiplyBy3(5)); // Output: 15


console.log("______________________________")


let arrNum = [1,2,3,4,5];

arrNum.forEach(num => {
    console.log("Element => ", num);
});

console.log("______________________________")


let ArrEl = [1,2,3,4,5];
let resultArr = [];

ArrEl.forEach((el) => {
    let result = el * 2;
    resultArr.push(result)
});

console.log(resultArr)


console.log("______________________________")


let mapArr = [1,2,3,4,5];
let mappedArr = mapArr.map((el) =>{
    return el * 2;
});
console.log(mappedArr)