//to use useState hook we need to import it from react
import {useState} from "react";
import { useEffect } from "react";


const Counter = () => {

    //State Variable : React will re-render the component whenever state variable changes
    //Normal Variable : React will NOT re-render the component whenever normal variable changes
    //Hooks are like a utility functions written inside react to provide some additional functionalities
    //Function starts with "use" are called hooks
    //UseState will return an array with 2 values
    //1.State Variable 2.Function to update the state variable
    //useState(initialValue)

    //const[stateVariable, functionToUpdateStateVariable] = useState(initialValue);

    const[count1,setCount1] = useState(0);

    const[count2,setCount2] = useState(0);

    useEffect(() => {
        console.log("UseEffect for 1st count")
    },[count1]);

    const increment1 = () => {
        console.log("1 st Increment button clicked")
        setCount1(count1 + 1);
    };

    const decrement1 = () => {
        console.log("1 st Decrement button clicked")
        setCount1(count1 - 1);
    };

     const increment2 = () => {
        console.log("2 nd Increment button clicked")
        setCount2(count2 + 1);
    };

    const decrement2 = () => {
        console.log("2 nd Decrement button clicked")
        setCount2(count2 - 1);
    };

    return (
        <>  
           <div className = "w-[300px] bg-yellow-400 m-4 mx-auto p-4 rounded-md shadow-lg flex flex-col items-center">
              <h1 className = "text-2xl mb-2">Counter</h1>
              <p className = "text-4xl font-bold">{count1}</p>
              <p className = "text-4xl font-bold">{count2}</p>
              <div className = "space-x-4">
                <button className = "bg-red-600 p-3 my-3 rounded-md shadow-xl text-white text-xl" onClick = {decrement1}>Decrement</button>
                <button className = "bg-green-400 p-3 my-3 rounded-md shadow-xl text-white text-xl" onClick = {increment1}>Increment</button>
              </div>
              <div className = "space-x-4">
                <button className = "bg-red-600 p-3 my-3 rounded-md shadow-xl text-white text-xl" onClick = {decrement2}>Decrement</button>
                <button className = "bg-green-400 p-3 my-3 rounded-md shadow-xl text-white text-xl" onClick = {increment2}>Increment</button>
              </div>
           </div>
        </>
    );
};

export default Counter;