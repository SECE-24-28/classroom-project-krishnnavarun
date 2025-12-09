//named exports
export const NUM = 10;
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

//---------------------------------------------
//another way of exporting named exports

const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export { multiply, divide }; 


//default export
//only one default export is allowed per module

const print = (num) => {
    console.log("Number:", num);
}

export default print;