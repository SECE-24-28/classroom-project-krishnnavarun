import { useState } from "react";

const Admin = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.price || !formData.image) {
            setMessage('Please fill all fields');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    price: parseFloat(formData.price),
                    image: formData.image,
                })
            });
            
            if (response.ok) {
                setMessage('Product added successfully!');
                setFormData({ name: '', price: '', image: '' });
                setTimeout(() => setMessage(''), 3000);
            } else {
                setMessage('Error adding product');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error adding product: ' + error.message);
        }
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-3xl font-bold mb-5">Admin Panel - Add Products</h1>
                
                <div className="bg-white p-8 rounded-lg max-w-md">
                    {message && (
                        <div className={`mb-4 p-3 rounded ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {message}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border-2 border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Enter product name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
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
                                value={formData.image}
                                onChange={handleChange}
                                className="border-2 border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Enter image URL"
                            />
                        </div>

                        {formData.image && (
                            <div className="mb-4">
                                <img src={formData.image} alt="Preview" className="h-40 w-40 object-cover rounded" />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Admin;
