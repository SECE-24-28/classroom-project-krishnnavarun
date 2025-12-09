import cart from "../assets/cart.png";
import user from "../assets/user.png";

const Navbar = () => {
    return(
        <>
            <div className = "mx-15 my-4 flex justify-between items-center">
                <h1 className = "text-black text-2xl font-bold font-sans">e-Shop <span className = "text-red-500">!</span></h1>
                <div className = "flex">
                    <input type = "text" placeholder = "Search For Products......" className = "border-2 border-slate-300 rounded-lg h-10 w-70 px-5 text-lg p-2 focus:outline-none focus:ring-1 focus:ring-slate-500 mr-10"/>

                    <div className = "flex ml-8">
                        {/* <img src = {cart} alt = {cart} className = "w-8 h-8 inline-block mr-4"/> */}
                        <div>
                            <h1 className = "text-lg">Cart</h1>
                            <h1 className = "text-md font-bold">$0</h1>
                        </div>
                    </div>

                    <div className = "flex ml-10">
                        <img src = {user} className = "h-10 mr-4"/>
                        <div>
                            <h1 className = "text-lg">User</h1>
                            <h1 className = "text-md font-bold">Login</h1>
                        </div>
                    </div>
                </div>
            </div>







            <div className = "w-full bg-orange-600 shadow-xl shadow-gray-400">
            <div className="max-w-screen-2xl mx-5">
            <div className = "flex justify-between p-5 text-white">
                <div className = "flex space-x-20">
                    <div className = "flex justify-center">
                        <div className="w-10 h-6 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <h1 className = "text-md">All Categories !</h1>
                    </div>

                    <h1>Products !</h1>
                    <h1>Blog !</h1>
                    <h1>Contact !</h1>
                </div>

                <div className = "flex space-x-20">
                   <h1 className = "text-md">Limited Sale !</h1>
                   <h1 className = "text-md">Best Seller !</h1>
                   <h1 className = "text-md">New Arrival !</h1>
                </div>
            </div>
            </div>
            </div>
        </>
    )
};


export default Navbar;