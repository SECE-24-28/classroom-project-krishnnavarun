// console.log("Start");

// setTimeout(() => {
//     console.log("Inside Timeout after 2 seconds");
// },2000);

// console.log("End");




//promises

// const myPromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved Successfully");
//     },2000);
// });


// myPromise.then((message) => {
//     console.log(message);   
// })
// .catch((error) => {
//     console.log("Error:", error);
// });


//function to check even or odd number using promise

const evenOddPromise = (number) => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        if(number % 2 === 0){
            resolve("Even Number")
        }
        else{
            reject("Odd Number")
        }
    },2000)
})
};


//function to check if number is less than 10 using promise

const checkLessThan10 = (number) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(number < 10){
                resolve("Number is less than 10");
            }
            else{
                reject("Number is not less than 10");
            }
        },2000)
    })
};



//promise chining
// let number = 91;
// evenOddPromise(number).then((message) => {
//     console.log(message);
//     return checkLessThan10(number);
// })

// .catch((error) => {
//     console.log('CATCH1',  error);
//     if(error !== 'Number is not less than 10'){
//         return checkLessThan10(number);
//     }
// })

// .then((message) => {
//     console.log('RES: ', message);
// })

// .catch((error) => {
//     console.log('ERR: ', error);
// });



//async , await

const checkCondition = async() => {
    let a = 8;
    console.log("Starting");
    try{
        const res = await evenOddPromise(a);
        console.log(res);
    }catch(error){
        console.log("Error:",error);
    }
    try{
        const res2 = await checkLessThan10(a);
        console.log(res2);
    }
    catch(error){
        console.log("Error:",error);
    }

    console.log("Ending");
}

checkCondition();