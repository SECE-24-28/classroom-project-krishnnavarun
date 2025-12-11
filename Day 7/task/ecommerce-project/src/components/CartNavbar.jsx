const CartNavbar = () => {
    return(
        <>

            <div className = "w-full bg-orange-600 shadow-xl shadow-gray-400 flex justify-between p-5 text-white">
                <h1 className = "text-black text-2xl font-bold font-sans">e-Shop <span className = "text-red-500">!</span></h1>
                <div className = "flex items-center">
                    <input type = "text" placeholder = "Search For Products......" className = "border-2 border-slate-300 hover:shadow-lg hover:text-slate-900 rounded-lg text-black h-10 w-200 px-5 text-xl p-2 focus:outline-none focus:ring-1 focus:ring-slate-500 mr-80"/>
                    <h1 className = "text-black font-semibold text-2xl ml-25 mr-20">Cart</h1>
                </div>
            </div>
            
        </>
    )
};

export default CartNavbar;