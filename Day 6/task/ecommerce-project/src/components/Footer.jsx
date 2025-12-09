
const Footer = () => {
    return(
    <>
        <div className = "flex bg-gray-900 p-10 flex-wrap">
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


export default Footer;