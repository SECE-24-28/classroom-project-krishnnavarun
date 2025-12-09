import Baggyphant from "../assets/BaggyPhant.png";
import jersey from "../assets/jersey.jpg";
import shirt2 from "../assets/shirt2.jpg";
import shirt1 from "../assets/shirt1.jpg";
import shirt4 from "../assets/shirt4.jpg";
import phant from "../assets/phant.jpg";
import tshirt1 from "../assets/t-shirt1.jpg";
import tshirt2 from "../assets/t-shirt2.jpg";
import tshirt3 from "../assets/t-shirt3.jpg";
import phant2 from "../assets/phant-2.jpg";


const Cards = () => {
    return (
        <>
        
            <div className = "m-10">
            <h1 className = "text-2xl font-bold">Popular Categories !</h1>
            <div className = "my-5">
                <div className = "flex space-x-4 space-y-4 flex-wrap">
                    <div className = "bg-white p-5 w-[17vw]">
                        <img src = {shirt2} className = "h-[30vh] w-[20vw]"/>
                        <div className = "text-center my-3">
                            <h1 className = "text-2xl">Check Overshirt</h1>
                            <h1 className = "text-gray-900 text-xl font-bold">₹ 999 Only</h1>
                        </div>
                    </div>

                    <div className = "bg-white p-5 w-[17vw]">
                        <img src = {phant} className = "h-[30vh] w-[20vw]"/>
                        <div className = "text-center my-3">
                            <h1 className = "text-2xl">Casual Joggers</h1>
                            <h1 className = "text-gray-900 text-xl font-bold">₹ 999 Only</h1>
                        </div>
                    </div>

                    <div className = "bg-white p-5 w-[17vw]">
                        <img src = {tshirt1} className = "h-[30vh] w-[20vw]"/>
                        <div className = "text-center my-3">
                            <h1 className = "text-2xl">Polo Jersey</h1>
                            <h1 className = "text-gray-900 text-xl font-bold">₹ 999 Only</h1>
                        </div>
                    </div>

                    <div className = "bg-white p-5 w-[17vw]">
                        <img src = {tshirt3} className = "h-[30vh] w-[20vw]"/>
                        <div className = "text-center my-3">
                            <h1 className = "text-2xl">Tri-Color Jacket</h1>
                            <h1 className = "text-gray-900 text-xl font-bold">₹ 999 Only</h1>
                        </div>
                    </div>

                    <div className = "bg-white p-5 w-[17vw]">
                        <img src = {tshirt2} className = "h-[30vh] w-[20vw]"/>
                        <div className = "text-center my-3">
                            <h1 className = "text-2xl">Vintage Sweatshirt</h1>
                            <h1 className = "text-gray-900 text-xl font-bold">₹ 999 Only</h1>
                        </div>
                    </div>

                    <div className = "bg-white p-5 w-[17vw]">
                        <img src = {shirt1} className = "h-[30vh] w-[20vw]"/>
                        <div className = "text-center my-3">
                            <h1 className = "text-2xl">Knit Shirt</h1>
                            <h1 className = "text-gray-900 text-xl font-bold">₹ 999 Only</h1>
                        </div>
                    </div>

                    <div className = "bg-white p-5 w-[17vw]">
                        <img src = {phant2} className = "h-[30vh] w-[20vw]"/>
                        <div className = "text-center my-3">
                            <h1 className = "text-2xl">Denim Jeans</h1>
                            <h1 className = "text-gray-900 text-xl font-bold">₹ 999 Only</h1>
                        </div>
                    </div>

                    <div className = "bg-white p-5 w-[17vw]">
                        <img src = {shirt4} className = "h-[30vh] w-[20vw]"/>
                        <div className = "text-center my-3">
                            <h1 className = "text-2xl">Casual Shirt</h1>
                            <h1 className = "text-gray-900 text-xl font-bold">₹ 999 Only</h1>
                        </div>
                    </div>

                    <div className = "bg-white p-5 w-[17vw]">
                        <img src = {Baggyphant} className = "h-[30vh] w-[20vw]"/>
                        <div className = "text-center my-3">
                            <h1 className = "text-2xl">Jogger Pants</h1>
                            <h1 className = "text-gray-900 text-xl font-bold">₹ 999 Only</h1>
                        </div>
                    </div>

                    <div className = "bg-white p-5 w-[17vw] h-[46vh]">
                        <img src = {jersey} className = "h-[30vh] w-[20vw]"/>
                        <div className = "text-center my-3">
                            <h1 className = "text-2xl">Sports Jersey</h1>
                            <h1 className = "text-gray-900 text-xl font-bold">₹ 999 Only</h1>
                        </div>
                    </div>
                </div>
                <h1 className = "text-center mt-10 text-2xl text-red-500 font-bold">Will Be Updated Soon !</h1>
            </div>
            </div>







            

        </>
    )
};


export default Cards;