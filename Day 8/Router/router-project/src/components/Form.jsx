import { useState } from "react";
import { useNavigate } from "react-router";

const Form = ({ addToCart }) => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [originalPrice, setOriginalPrice] = useState("");

    const navigate = useNavigate();

    const [nameErr, setNameErr] = useState("");
    const [imageErr, setImageErr] = useState("");
    const [sellErr, setSellErr] = useState("");
    const [origErr, setOrigErr] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameErr("");
    };

    const handleOriginalPriceChange = (e) => {
        setOriginalPrice(e.target.value);
        setOrigErr("");
    }

    const handleImageChange = (e) => {
        setImage(e.target.value);
        setImageErr("");
    }

    const handleSellingPriceChange = (e) => {
        setSellingPrice(e.target.value);
        setSellErr("");
    };

    const handleButton = (e) => {
        e.preventDefault();

        let error = false;

        if (name === "") {
            setNameErr("Name required");
            error = true;
        }
        if (image === "") {
            setImageErr("Image required");
            error = true;
        }
        if (sellingPrice === "" || isNaN(sellingPrice)) {
            setSellErr("Invalid price");
            error = true;
        }
        if (originalPrice === "" || isNaN(originalPrice)) {
            setOrigErr("Invalid price");
            error = true;
        }

        if (error) return;

        addToCart({
            name,
            image,
            SellingPrice: sellingPrice,
            OriginalPrice: originalPrice

        });

        setName("");
        setImage("");
        setSellingPrice("");
        setOriginalPrice("");

    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-[400px] m-4 border-2 border-yellow-500 p-4 rounded-lg">
                <h1 className="text-xl text-center">Add Products</h1>

                <div className="mt-3">
                    <label>Name</label>
                    <input
                        type="text"
                        className="border-2 border-black w-full rounded-lg p-2 mt-2 hover:shadow-xl"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <p className="text-red-500 text-sm">{nameErr}</p>
                </div>

                <div className="mt-3">
                    <label>Image</label>
                    <input
                        type="text"
                        className="border-2 border-black rounded-lg w-full p-2 mt-2 hover:shadow-xl"
                        value={image}
                        onChange={handleImageChange}
                    />
                    <p className="text-red-500 text-sm">{imageErr}</p>
                </div>

                <div className="mt-3">
                    <label>Selling Price</label>
                    <input
                        type="text"
                        className="border-2 border-black w-full rounded-lg p-2 mt-2 hover:shadow-xl"
                        value={sellingPrice}
                        onChange={handleSellingPriceChange}
                    />
                    <p className="text-red-500 text-sm">{sellErr}</p>
                </div>

                <div className="mt-3">
                    <label>Original Price</label>
                    <input
                        type="text"
                        className="border-2 border-black w-full rounded-lg p-2 mt-2 hover:shadow-xl"
                        value={originalPrice}
                        onChange={handleOriginalPriceChange}
                    />
                    <p className="text-red-500 text-sm">{origErr}</p>
                </div>
                <div className = "text-center">
                    <button
                        className="h-10 w-[7vw] mt-10 bg-white border-2 border-black rounded-lg px-5 hover:shadow-xl hover:bg-black hover:text-white"
                        onClick={handleButton}
                    > ADD </button>
                </div>
            </div>
        </div>
    );
};

export default Form;
