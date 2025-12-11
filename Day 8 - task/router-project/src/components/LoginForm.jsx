import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const LoginForm = () => {
    const [username, setusername] = useState('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setusername(e.target.value);
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(username, passwordRef.current.value)
        if(username==='user' && passwordRef.current.value==='user@123'){
            console.log("Login Succesfully")
            sessionStorage.setItem('isLogged','true')
            sessionStorage.setItem('role','user')
            navigate('/orders')
        }
        if(username==='admin' && passwordRef.current.value==='admin@123'){
            console.log("Login Succesfully")
            sessionStorage.setItem('isLogged','true')
            sessionStorage.setItem('role','admin')
            navigate('/orders')
        }
        else{
            console.log("Login failed");
            sessionStorage.setItem('isLogged','false');
            sessionStorage.setItem('role','client');
        }
    }

    return (
        <>
            <div className="mt-10 w-[400px] flex flex-col justify-center items-center mx-auto mt-50 p-5 bg-white-200 shadow-lg rounded-xl">
                <h1 className="font-bold text-4xl mb-5 pt-5">Login</h1>
                <input type="text" placeholder="Username" className="border p-2 m-3 rounded-[5px] w-[90%]"
                    value={username} onChange={handleNameChange} />
                <input type="password" placeholder="Password" className="border m-3 p-2 rounded-[5px] my-5 w-[90%]"
                    ref={passwordRef} />
                <button className="bg-blue-600 text-white text-xl px-5 py-2 rounded-lg mt-3 mb-4 hover:shadow-lg" onClick={handleSumbit}>Login</button>
                <Link to = '/' className="text-blue-600 hover:underline mb-5">Back</Link>
            </div>

        </>
    )
}

export default LoginForm;