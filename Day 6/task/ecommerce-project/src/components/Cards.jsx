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
import { useState, useEffect } from "react";


const Cards = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, []);

    const handleAddToCart = async (product) => {
        try {
            const response = await fetch('http://localhost:3000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                })
            });
            if (response.ok) {
                alert('Product added to cart!');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <>
        
            <div className = "m-10">
            <h1 className = "text-2xl font-bold">Popular Products !</h1>
            <div className = "my-5">
                <div className = "flex space-x-4 space-y-4 flex-wrap">
                    {products && products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className = "bg-white p-5 w-[17vw]">
                                <img src = {product.image} className = "h-[30vh] w-[20vw]"/>
                                <div className = "text-center my-3">
                                    <h1 className = "text-2xl">{product.name}</h1>
                                    <h1 className = "text-gray-900 text-xl font-bold">₹ {product.price} Only</h1>
                                    <button 
                                        onClick={() => handleAddToCart(product)}
                                        className = "mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <>
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
                    </>
                    )}
                </div>
            </div>
            </div>
        </>
    )
};


export default Cards;


            

        </>
    )
};


export default Cards;