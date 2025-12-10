//Form Handling

// 1. Controlled components (supports with re-rendering for every changes)

// 2. Uncontrolled Components  (ref)  (does not supports with re-rendering for each changes)



import { useState,useEffect,useRef } from "react";


const LoginForm  = () => {

    //Controlled Component
    const [userName,setUserName] = useState('');
    // const [password,setPassword] = useState('');

    //Uncontrolled Component
    const passwordRef = useRef("");

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    //Only consoles username while change in the username
    // useEffect(() => {
    //     console.log(userName)
    // },[userName]);
    

    //consoles both username and pass in single line
    // console.log(userName,password)

    // const handlePassword = (e) => {
    //     setPassword(e.target.value);
    // };
    
    //Only consoles password while change in the password
    // useEffect(() => {
    //     console.log(password)
    // },[password]);

    const submit = (e) =>{
        e.preventDefault();
        console.log(userName,passwordRef.current.value);
    }



    return(
        <>

        <div className = "flex justify-center items-center">
        <div className = "w-[400px] bg-pink-200 mt-15 p-4 text-center space-y-6 rounded-xl">
            <h1 className = "text-2xl font-bold">Login</h1>
            <div className = "m-2 flex flex-col space-y-4">
                <input type = "text" placeholder="Username" value = {userName} onChange = {handleUserName} className = "border-1 border-gray-600 rounded-lg h-9 focus:outline-none focus:ring-1 focus:ring-violet-700 pl-2"/>
                <input type = "password" placeholder="Password" ref = {passwordRef} className = "border-1 border-gray-600 rounded-lg h-9 focus:outline-none focus:ring-1 focus:ring-violet-700 pl-2"/>
            </div>
            <button className = "w-23 text-center bg-blue-500 p-2 border-0 mt-5 text-white hover:bg-blue-700 focus:outline-none rounded-lg" onClick = {submit}>Login</button>
        </div>
        </div>
        
        </>
    );
};


export default LoginForm;