import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!name || !price || !image) {
            toast.error('Please fill all fields');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:3000/products',{
                name : name,
                price : price,
                image: image
            });
            
            toast.success('Product added successfully!');
            setName('');
            setPrice('');
            setImage('');
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error adding product: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-3xl font-bold mb-5 text-center">Admin Login</h1>
                
                <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-md mx-auto mt-20">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleNameChange}
                                className="border-2 border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Enter product name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={price}
                                onChange={handlePriceChange}
                                className="border-2 border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Enter price"
                                step="0.01"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2">Image URL</label>
                            <input
                                type="text"
                                name="image"
                                value={image}
                                onChange={handleImageChange}
                                className="border-2 border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Enter image URL"
                            />
                        </div>

                        {image && (
                            <div className="mb-4">
                                <img src={image} alt="Preview" className="h-40 w-40 object-cover rounded" onError={() => {}} />
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"
                        >
                            {loading ? 'Adding...' : 'Add Product'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddProductForm;
