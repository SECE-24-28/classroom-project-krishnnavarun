import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { toast } from "react-toastify";

const AdminForm = () => {
    const [adminName, setAdminName] = useState('');
    const passwordRef = useRef('');

    const[Error,setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setAdminName(e.target.value);
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(adminName, passwordRef.current.value)
        if(adminName==='admin' && passwordRef.current.value==='admin@123'){
            console.log("Login Succesfully")
            setErrorMsg('');
            sessionStorage.setItem('isLogged','true')
            sessionStorage.setItem('role','admin')
            navigate('/addProductsForm')
            toast.success("Admin Login Successful");
        }else{
            console.log("Login failed");
            setErrorMsg("Invalid admin name or password*");
            sessionStorage.setItem('isLogged','false');
            sessionStorage.setItem('role','guest');
            toast.error("Invalid Admin Credentials");
        }
    }

    return (
        <>
            <div className="mt-10 w-[400px] flex flex-col justify-center items-center mx-auto mt-50 p-2 bg-white shadow-lg rounded-xl">
                <h1 className="font-bold text-4xl mb-5 pt-5">Login</h1>
                <input type="text" placeholder="Admin Name" className="border m-3 p-2 rounded-[5px] w-[90%]"
                    value={adminName} onChange={handleNameChange} />
                <input type="password" placeholder="Password" className="border m-3 p-2 rounded-[5px] my-5 w-[90%]"
                    ref={passwordRef} />
                    <p className = "text-red-500 text-lg">{Error}</p>
                <button className="bg-blue-600 text-white text-lg px-5 py-2 mt-3 rounded-lg mb-4 hover:shadow-lg" onClick={handleSumbit}>Login</button>
                <Link to = '/' className="text-blue-600 hover:underline mb-5">Home</Link>
            </div>

        </>
    )
}

export default AdminForm;