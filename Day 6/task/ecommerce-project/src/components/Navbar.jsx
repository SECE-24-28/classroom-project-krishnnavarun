import cart from "../assets/cart.png";
import user from "../assets/user.png";
import { useState, useEffect } from "react";

const Navbar = ({ onPageChange, currentPage }) => {
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        fetchCartTotal();
        // Refresh cart total every time the page changes
        const interval = setInterval(fetchCartTotal, 1000);
        return () => clearInterval(interval);
    }, []);

    const fetchCartTotal = async () => {
        try {
            const response = await fetch('http://localhost:3000/cart');
            const data = await response.json();
            const total = data.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            setCartTotal(total);
        } catch (error) {
            console.error('Error fetching cart total:', error);
        }
    };

    return(
        <>
            <div className = "mx-15 py-4 flex justify-between items-center">
                <h1 className = "text-black text-2xl font-bold font-sans cursor-pointer hover:text-orange-600" onClick={() => onPageChange('home')}>e-Shop <span className = "text-red-500">!</span></h1>
                <div className = "flex">
                    <input type = "text" placeholder = "Search For Products......" className = "border-2 border-slate-300 rounded-lg h-10 w-70 px-5 text-lg p-2 focus:outline-none focus:ring-1 focus:ring-slate-500 mr-10"/>

                    <div className = "flex ml-8 cursor-pointer hover:text-orange-600" onClick={() => onPageChange('cart')}>
                        {/* <img src = {cart} alt = {cart} className = "w-8 h-8 inline-block mr-4"/> */}
                        <div>
                            <h1 className = "text-lg">Cart</h1>
                            <h1 className = "text-md font-bold">₹{cartTotal}</h1>
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
                    <div className = "flex justify-center cursor-pointer hover:text-gray-200" onClick={() => onPageChange('home')}>
                        <div className="w-10 h-6 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <span className = "text-md">Home</span>
                    </div>

                    <h1 className = "cursor-pointer hover:text-gray-200">Products !</h1>
                    <h1 className = "cursor-pointer hover:text-gray-200">Blog !</h1>
                    <h1 className = "cursor-pointer hover:text-gray-200">Contact !</h1>
                    <h1 className = "cursor-pointer hover:text-gray-200" onClick={() => onPageChange('admin')}>Admin</h1>
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
