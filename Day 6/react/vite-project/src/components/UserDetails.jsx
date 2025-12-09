import { useState,useEffect } from "react";


const UserDetails = (props) => {

    const {currPage} = props;

    const [userData,setUserData] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currPage}`);
            const data = await response.json();
            setLoading(false);
            console.log(data);
            setUserData(data);
        }
        fetchData();    
    },[currPage]);



    return (
        <>
            <div className = "w-[300px] mx-auto bg-orange-200 flex flex-col items-center shadow-xl p-5">
                <h1 className = "text-2xl mb-2 font-bold">User Details</h1>
                {loading ?(
                    <p className = "font-bold text-xl">Loading</p>
                )
                :(
                <p className = "font-bold text-xl">{userData.name}</p>)
                }
            </div>
        </>
    )
}

export default UserDetails;