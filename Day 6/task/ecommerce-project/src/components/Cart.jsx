import { useState, useEffect } from "react";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const response = await fetch('http://localhost:3000/cart');
            const data = await response.json();
            setCartItems(data);
            calculateTotal(data);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    const calculateTotal = (items) => {
        const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        setTotal(totalPrice);
    };

    const handleUpdateQuantity = async (id, newQuantity) => {
        if (newQuantity <= 0) {
            handleRemoveItem(id);
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/cart/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ quantity: newQuantity })
            });
            if (response.ok) {
                fetchCart();
            }
        } catch (error) {
            console.error('Error updating cart:', error);
        }
    };

    const handleRemoveItem = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/cart/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchCart();
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const handleClearCart = async () => {
        try {
            const response = await fetch('http://localhost:3000/cart', {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchCart();
            }
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-3xl font-bold mb-5">Shopping Cart</h1>
                
                {cartItems.length === 0 ? (
                    <div className="bg-white p-10 rounded-lg text-center">
                        <h2 className="text-2xl text-gray-500">Your cart is empty</h2>
                    </div>
                ) : (
                    <>
                        <div className="bg-white p-5 rounded-lg">
                            <table className="w-full">
                                <thead className="border-b-2">
                                    <tr>
                                        <th className="text-left py-3 px-5">Product</th>
                                        <th className="text-left py-3 px-5">Price</th>
                                        <th className="text-left py-3 px-5">Quantity</th>
                                        <th className="text-left py-3 px-5">Total</th>
                                        <th className="text-left py-3 px-5">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id} className="border-b">
                                            <td className="py-3 px-5">
                                                <div className="flex items-center">
                                                    <img src={item.image} alt={item.name} className="w-12 h-12 mr-4 rounded" />
                                                    <span>{item.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-5">₹{item.price}</td>
                                            <td className="py-3 px-5">
                                                <div className="flex items-center space-x-2">
                                                    <button 
                                                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                                        className="bg-gray-300 px-2 py-1 rounded"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-3">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                                        className="bg-gray-300 px-2 py-1 rounded"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-3 px-5">₹{item.price * item.quantity}</td>
                                            <td className="py-3 px-5">
                                                <button 
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-5 rounded-lg mt-5 flex justify-end">
                            <div className="w-64">
                                <div className="flex justify-between mb-3 border-b pb-3">
                                    <span>Subtotal:</span>
                                    <span>₹{total}</span>
                                </div>
                                <div className="flex justify-between mb-3 border-b pb-3">
                                    <span>Shipping:</span>
                                    <span>₹0</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold mb-5">
                                    <span>Total:</span>
                                    <span>₹{total}</span>
                                </div>
                                <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-3">
                                    Checkout
                                </button>
                                <button 
                                    onClick={handleClearCart}
                                    className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
