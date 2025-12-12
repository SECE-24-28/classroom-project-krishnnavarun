import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router";
import CartTotalPrice from "./CartTotalPrice";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3000/cart');
            const data = await response.json();
            setCartItems(data);
            calculateTotal(data);
        } catch (error) {
            console.error('Error fetching cart:', error);
            toast.error('Failed to fetch cart');
        } finally {
            setLoading(false);
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
        }0

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
                toast.success('Quantity updated');
            }
        } catch (error) {
            console.error('Error updating cart:', error);
            toast.error('Error updating cart');
        }
    };

    const handleRemoveItem = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/cart/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchCart();
                toast.success('Item removed from cart');
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
            toast.error('Error removing item');
        }
    };

    const handleClearCart = async () => {
        try {
            const response = await fetch('http://localhost:3000/cart', {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchCart();
                toast.success('Cart cleared');
            }
        } catch (error) {
            console.error('Error clearing cart:', error);
            toast.error('Error clearing cart');
        }
    };

    if (loading) {
        return <div className="text-center p-10">Loading cart...</div>;
    }

    return (
        <>
            <div className="m-10">
                <h1 className="text-3xl font-bold mb-5">Shopping Cart</h1>
                
                {cartItems.length === 0 ? (
                    <div className="bg-white p-10 rounded-lg text-center">
                        <h2 className="text-2xl text-gray-500">Your cart is empty</h2>
                        <Link to="/" className="mt-5 inline-block bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded-lg transition">
                         Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <>
                <div className="flex gap-6">
                    {/* Left side - Product Cards */}
                    <div className="flex-1">
                        <div className="flex flex-wrap gap-5">
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-white p-5 w-80 rounded-lg shadow hover:shadow-lg transition">
                                    <img src={item.image} alt={item.name} className="w-full h-[25vh] object-cover rounded mb-3" />
                                    <div>
                                        <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-2xl font-bold text-blue-600">₹{item.price}</span>
                                            <span className="text-gray-600 text-sm">Qty: {item.quantity}</span>
                                        </div>
                                        <p className="text-gray-700 mb-3">Subtotal: <span className="font-bold">₹{item.price * item.quantity}</span></p>
                                        
                                        <div className="flex items-center justify-between mb-3 gap-2">
                                            <div className="flex items-center gap-2 border rounded">
                                                <button 
                                                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                                    className="bg-gray-200 px-3 py-1 hover:bg-gray-300 transition"
                                                >
                                                    −
                                                </button>
                                                <span className="px-4 py-1 font-semibold">{item.quantity}</span>
                                                <button 
                                                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                                    className="bg-gray-200 px-3 py-1 hover:bg-gray-300 transition"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button 
                                                onClick={() => handleRemoveItem(item.id)}
                                                className="flex-1 bg-red-500 hover:bg-red-700 text-white py-2 rounded transition font-semibold"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 flex gap-4">
                            <Link to="/products" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-center font-semibold transition">
                                Continue Shopping
                            </Link>
                            <Link to="/" className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg text-center font-semibold transition">
                                Back to Home
                            </Link>
                        </div>
                    </div>

                    {/* Right side - Price Details */}
                    <CartTotalPrice items={cartItems} onClearCart={handleClearCart}/>
                </div>
            </>
                )}
            </div>
        </>
    );
};

export default Cart;