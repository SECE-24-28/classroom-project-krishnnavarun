const Navbar = () => {
    return(
        <>
        
            {/* Navbar */}

            <div className = "flex justify-between items-center border-3 p-4 border-black rounded-xl">
                <h1 className = "border-1 border-yellow-500 px-15 py-5 text-white bg-yellow-400 rounded-lg"></h1>
                <div className = "space-x-8 flex">
                    <h1 className = "text-gray-900 text-lg hover:underline">Products</h1>
                    <h1 className = "text-gray-900 text-lg hover:underline">Orders</h1>
                    <h1 className = "text-gray-900 text-lg hover:underline">Cart</h1>
                    <h1 className = "text-gray-900 text-lg hover:underline ml-3">Log in</h1>
                </div>
            </div>
        </>

    )
};


export default Navbar;  