import shirt2 from '../assets/shirt2.jpg'
import phant from '../assets/phant.jpg'
import jersey from '../assets/jersey.jpg'
const Orders = () => {
    return(
        <>
        <div className = "m-10 flex space-x-4 space-y-4 flex-wrap">
            <div className = "bg-white p-5 w-[17vw]">
                <img src = {shirt2} className = "h-[30vh] w-[20vw]"/>
                <div className = "text-center my-3 space-y-3">
                    <h1 className = "text-2xl">Check Overshirt</h1>
                    <h1 className = "text-gray-900 text-xl font-bold">Price : ₹ 899 (30 % Off)</h1>
                    <h1 className = "text-gray-900 text-xl font-semibold">Quantity : 1</h1>
                </div>
            </div>

            <div className = "bg-white p-5 w-[17vw]">
                <img src = {phant} className = "h-[30vh] w-[20vw]"/>
                <div className = "text-center my-3 space-y-3">
                    <h1 className = "text-2xl">Casual Joggers</h1>
                    <h1 className = "text-gray-900 text-2xl font-bold">Price : ₹ 1899 (25 % Off)</h1>
                    <h1 className = "text-gray-900 text-xl font-semibold">Quantity : 3</h1>
                </div>
            </div>


            <div className = "bg-white p-5 w-[17vw] h-[46vh]">
                <img src = {jersey} className = "h-[30vh] w-[20vw]"/>
                <div className = "text-center my-3 space-y-3">
                    <h1 className = "text-2xl">Sports Jersey</h1>
                    <h1 className = "text-gray-900 text-2xl font-bold">Price : ₹ 1299 (40 % Off)</h1>
                    <h1 className = "text-gray-900 text-xl font-semibold">Quantity : 2</h1>
                </div>
            </div>
        </div>
        </>
    );
};



export default Orders;