import {Link, useNavigate} from "react-router";
import { toast } from "react-toastify";

const Navbar = () => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        sessionStorage.removeItem('isLogged');
        sessionStorage.removeItem('role');
        toast.success('Logged out successfully');
        navigate('/');
    };

    const isAdmin = sessionStorage.getItem('role') === 'admin';

    return(
        <> 
            <div className="w-full bg-orange-600 shadow-xl shadow-gray-400">
                <div className="mx-auto px-4 py-4">
                    <div className="flex justify-between">
                        {/* Left Section - Logo & Main Links */}
                        <div className="flex space-x-10 ml-10 text-white">
                            
                            <div className="flex items-center space-x-20 text-lg font-semibold">

                                <Link to="/" className="text-xl font-bold hover:underline transition">
                                    Home
                                </Link>
                                <Link to="/products" className="text-xl font-bold hover:underline transition">
                                     Products
                                </Link>
                                <Link to="/cart" className="text-xl font-bold hover:underline transition">
                                    Cart
                                </Link>
                                <Link to="/orders" className="text-xl font-bold hover:underline transition">
                                     Orders
                                </Link>
                            </div>
                        </div>

                        {/* Middle Section - Search */}
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            className="border-2 border-white rounded-lg text-gray-900 h-10 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
                        />

                        {/* Right Section - User Links */}
                        <div className="flex items-center space-x-6 text-lg font-semibold text-white">
                            <Link to="/addProductsForm" className="pr-30 pl-2 py-2 hover:underline rounded font-bold">
                                Add Products
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;