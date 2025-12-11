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

import { Link } from "react-router";
import NavbarLayout from "../layout/NavbarLayout";

const Home = () => {
    return(
        <>

            {/* Navbar */}


            {/* Popular Categories Section */}

            <div className = "m-10">
            <h1 className = "text-4xl font-bold hover:text-purple-700">Popular Products</h1>
            <div className = "my-5">
                <div className = "flex space-x-4 space-y-4 flex-wrap">
                    
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

                </div>
            </div>
            </div>




            {/* Footer */}

            <div className = "flex bg-gray-900 p-10 mt-30 flex-wrap">
            <div className = "mx-5 flex-grow">
                <h1 className = "text-gray-400 text-lg">ABOUT</h1>
                <div className = "space-y-1 mt-5 text-white flex flex-col font-bold text-md">
                    <a href = "#">Contact Us</a>
                    <a href = "#">About Us</a>
                    <a href = "#">Careers</a>
                    <a href = "#">e-Shop Stories</a>
                    <a href = "#">Corporate Information</a>
                </div>
            </div>

            <div className = "mx-7 flex-grow">
                <h1 className = "text-gray-400 text-lg">HELP</h1>
                <div className = "space-y-1 mt-5 text-white flex flex-col font-bold text-md">
                    <a href = "#">Payments</a>
                    <a href = "#">Shipping</a>
                    <a href = "#">Cancellation & Returns</a>
                    <a href = "#">FAQ</a>
                </div>
            </div>

            <div className = "mx-7 flex-grow">
                <h1 className = "text-gray-400 text-lg">CONSUMER POLICY</h1>
                <div className = "space-y-1 mt-5 text-white flex flex-col font-bold text-md">
                    <a href = "#">Cancellation & Returns</a>
                    <a href = "#">Shipping</a>
                    <a href = "#">Cancellation & Returns</a>
                    <a href = "#">FAQ</a>
                </div>
            </div>


            <div className="h-50 w-px bg-gray-600 mx-5"></div>


            <div className = "mx-7 flex-grow">
                <h1 className = "text-gray-400 text-lg">MAIL US</h1>
                <div className = "space-y-1 mt-5 text-white flex flex-col font-bold text-md">
                    <a href = "#">easy@eshop.com</a>
                    <a href = "#">E-Shop Private Limited</a>
                    <a href = "#">Bengaluru, 560103</a>
                    <a href = "#">Karnataka,India</a>
                </div>
            </div>

            <div className = "mx-7 flex-grow">
                <h1 className = "text-gray-400 text-lg">MAKE MONEY WITH US</h1>
                <div className = "space-y-1 mt-5 text-white flex flex-col font-bold text-md">
                    <a href = "#">Sell on e-shop</a>
                    <a href = "#">Supply to e-shop</a>
                    <a href = "#">Become an affiliate</a>
                    <a href = "#">Advertise Your Products</a>
                </div>

            </div>
        </div>
        </>
    );
};




export default Home;