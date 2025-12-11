import CartTotalPrice from "./CartTotalPrice";
import tshirt1 from "../assets/t-shirt1.jpg";
import tshirt3 from "../assets/t-shirt3.jpg";
import Baggyphant from "../assets/BaggyPhant.png";
import { useState } from "react";
import { Link } from "react-router";

const Cart = () => {


  const [items, setItems] = useState([
    { id: 1, title: "Polo Jersey", price: 799, qty: 1 },
    { id: 2, title: "Jogger Pants", price: 899, qty: 1 },
    { id: 3, title: "Tri-Color Jacket", price: 1999, qty: 1 }
  ]);

  const handleDecrementQty = (id) => {
    setItems(prevItems =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  const handleIncrementQty = (id) => {
    setItems(prevItems =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const images = [tshirt1, Baggyphant, tshirt3];

  return (
    <>
    <div className = "w-full bg-orange-600 shadow-xl shadow-gray-400 flex justify-between p-5 text-white">
        <Link to ='/'  className = "text-white text-3xl font-bold font-sans hover:text-black">e-Shop <span className = "text-red-500">!</span></Link>
        <div className = "flex items-center">
            <input type = "text" placeholder = "Search For Products......" className = "border-2 border-slate-300 hover:shadow-lg hover:text-white rounded-lg text-black h-10 w-200 hover:bg-black px-5 text-xl p-2 focus:outline-none focus:ring-1 focus:ring-slate-500 mr-80"/>
            <Link to = '/' className = "text-white font-semibold text-3xl ml-25 mr-20 hover:text-black">Back To Home</Link>
        </div>
    </div>
    <h1 className = "text-4xl font-bold mx-10 mt-10 hover:text-red-600">Customize Your Shopping Cart</h1>
    <div className="flex">
      <div className="m-10">

        <div className="my-5 space-x-10">
          <div className="flex flex-wrap gap-6">
            {items.map((item, index) => {
              const { id, title, price, qty } = item;
              const imgSrc = images[index];

              return (
                <div key={id} className="bg-white p-5 w-[17vw] shadow-xl hover:transition-transform hover:scale-150">
                  <img src={imgSrc} className="h-[30vh] w-[20vw]" alt={title} />

                  <div className="text-center my-3">
                    <h1 className="text-2xl">{title}</h1>
                    <h1 className="text-gray-900 text-2xl font-bold">
                      ₹ {price} Only
                    </h1>
                  </div>

                  <div className="flex justify-center space-x-5">
                    <button
                      className="px-4 py-2 border-3 text-3xl font-semibold rounded-xl text-center"
                      onClick = {() => handleDecrementQty(id)}
                    >
                      -
                    </button>

                    <span className="px-8 py-2 border-3 text-2xl font-semibold border-black rounded-xl text-center">
                      {qty}
                    </span>

                    <button
                      className="px-4 py-2 border-3 text-2xl font-semibold border-black rounded-xl text-center"
                      onClick={() => handleIncrementQty(id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="m-20 hover:transition-transform hover:scale-140">
        <CartTotalPrice items={items} />
      </div>
    </div>
    </>
  );
};

export default Cart;