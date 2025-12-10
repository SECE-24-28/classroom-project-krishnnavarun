import { useState,useEffect, useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

const UserDetails = () => {

    const { currPage } = useContext(GlobalContext);

    const [userData,setUserData] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currPage}`);
            const data = await response.json();
            setLoading(false);
            
            setUserData(data);
            localStorage.setItem('name', JSON.stringify(data.name));
        }
        fetchData();    
    },[currPage]);



    return (
        <>
            <div className = "w-[300px] mx-auto mt-20 text-center bg-orange-200 flex flex-col justify-center items-center shadow-xl p-5">
                <h1 className = "text-2xl mb-2 font-bold">User Details</h1>
                {loading ?(
                    <p className = "font-bold text-xl">Loading</p>
                )
                :(
                <p className = "font-bold text-xl">{localStorage.getItem('name')}</p>)
                }
            </div>
        </>
    )
}

export default UserDetails;