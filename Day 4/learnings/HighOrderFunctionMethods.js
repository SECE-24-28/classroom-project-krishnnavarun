//map
let Maparr = [1, 2, 3, 4, 5];

let mappped = Maparr.map((el) => {
    return el * 2;
});

console.log("Mapped : " , mappped);

//filter
let arr = [12, 5, 8, 'el', 44];

let filtered = arr.filter((el) => {
    return el % 2 === 0;
});

console.log("Filtered : " , filtered);


//filter characters
//typeof operator
let charArr = [10,20,'J',30,'A','V','A'];

let filteredChar = charArr.filter((el) => {
    return typeof el === 'string';
});

console.log("Filtered Characters : " , filteredChar);


//filter numbers and only tru boolean and without empty strings

let filterCustomArr = [10,false,1.2,-0.7,null,"",undefined,'Hello',true];
let flterCustom = filterCustomArr.filter((el) => el);
console.log("Filtered Custom : " , flterCustom);


//both map and filter
let mapFilterArr = [10, 15, 20, 25, 30, 35];

let mapFilter = mapFilterArr.map((el) => {
    return el * 5;}).filter((el) => {return el > 100;}
);

console.log("Map and Filter : " , mapFilter);