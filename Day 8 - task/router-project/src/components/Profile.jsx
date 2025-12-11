
const Profile = () => {
    return(
        <>  
            <div className = "min-w-screen-2xl mx-18 p-5">
            <div className = "m-10 p-10 bg-white shadow-lg rounded-lg w-[40vw] mx-auto">    
                <h1 className = "text-3xl font-bold mb-5">Profile Page</h1>
                <div className = "text-xl space-y-4">
                    <h1><span className = "font-semibold">Name :</span> User</h1>
                    <h1><span className = "font-semibold">Email :</span> User@gmail.com</h1>
                    <h1><span className = "font-semibold">Phone :</span>1234567890</h1>
                    <h1><span className = "font-semibold">Address :</span> 123 Main St, Cityville, Country</h1>
                </div>
            </div>
            </div>
        </>
    );
};


export default Profile;