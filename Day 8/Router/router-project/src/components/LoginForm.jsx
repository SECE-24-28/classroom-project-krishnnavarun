import { useRef, useState } from "react";
import { useNavigate } from "react-router";

const LoginForm = () => {
    const [username, setusername] = useState('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setusername(e.target.value);
    }
    // console.log(username);

    // const handlePasswordChange=(e) => {
    //     setpassword(e.target.value);
    // }
    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(username, passwordRef.current.value)
        if(username==='abc' && passwordRef.current.value==='123'){
            console.log("Login Succesfully")
            localStorage.setItem('isLogged','true')
            navigate('/admin')
        }else{
            console.log("Login failed");
            localStorage.setItem('isLogged','false');
        }
    }

    return (
        <>
            <div className="mt-10 w-[400px] flex flex-col justify-center items-center mx-auto p-2 bg-violet-200 shadow-lg rounded-xl">
                <h1 className="font-bold text-2xl mb-5 pt-5">Login</h1>
                <input type="text" placeholder="Username" className="border p-2 rounded-[5px] w-[80%]"
                    value={username} onChange={handleNameChange} />
                <input type="password" placeholder="Password" className="border p-2 rounded-[5px] my-5 w-[80%]"
                    ref={passwordRef} />
                <button className="bg-orange-600 text-white text-lg px-3 py-1 rounded-lg mb-4" onClick={handleSumbit}>Login</button>
            </div>

        </>
    )
}

export default LoginForm;