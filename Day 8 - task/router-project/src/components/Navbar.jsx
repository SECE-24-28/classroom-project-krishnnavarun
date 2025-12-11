import {Link} from "react-router";

const Navbar = () => {
    return(
        <> 
   
            <div className = "w-full bg-orange-600 shadow-xl shadow-gray-400">
            <div className="min-w-screen-2xl mx-10 py-3">
            <div className = "flex justify-between py-4 text-white">
                <div className = "flex space-x-20 text-xl font-semibold">
                    
                    <Link to ='/' className="hover:underline">Home</Link>

                    <Link to = "/products" className="hover:underline">Products </Link>
                    <Link to = "/cart" className="hover:underline">Cart </Link>
                    <Link to = "/orders" className="hover:underline">Orders </Link>
                    <input type = "text" placeholder = "Search For Products......" className = "border-2 border-slate-300 hover:shadow-lg hover:bg-black hover:text-white rounded-lg text-black h-10 w-80 px-5 text-xl p-2 focus:outline-none focus:ring-1 focus:ring-slate-500 ml-25"/>
                </div>

                <div className = "flex space-x-15 text-xl font-semibold">
                   <Link to = '/profile' className="hover:underline ml-10">Profile</Link>
                   <Link to = '/addProductsForm' className = "hover:underline">Add Products</Link>
                </div>
            </div>
            </div>
            </div>


        </>
    );
};



export default Navbar;