// spread operation(...) is used to repeat the elemenst without adding the updated elements
const arr1 = [1,2,3,4];
const arr2 = [...arr1];
arr1.push(5);

console.log(arr1);
console.log(arr2);



const obj1 = {A:10,B:20};;
const obj2 = {...obj1};
obj1.C = 30;

console.log(obj1);
console.log(obj2);