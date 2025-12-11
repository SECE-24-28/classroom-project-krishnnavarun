import { useEffect, useState } from "react";
import Cart from "./Cart";

const CartTotalPrice = (props) => {

  const { items } = props;

  const [mrp, setMrp] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState(40);     
  const [protectFee, setProtectFee] = useState(19);

  const [totalAmount, setTotalAmount] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);

  useEffect(() => {

    const total = items.reduce((acc, item) => acc + item.price * item.qty,0);
    setMrp(total);

    const calcDiscount = Math.floor(total * (coupon / 100));
    setDiscount(calcDiscount);


    const grandTotal = total - calcDiscount - coupon + protectFee;
    setTotalAmount(grandTotal);


    setTotalSavings(calcDiscount + coupon);

  }, [items]);

  return (
    <div className="w-[30vw] bg-white shadow-xl shadow-gray-400 p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-5">PRICE DETAILS</h1>
      <hr className="my-3" />

      <div className="flex justify-between mb-2">
        <span className = "text-xl">Price ({items.length} items)</span>
        <span className = "font-semibold text-xl">Rs {mrp}</span>
      </div>

      <div className="flex justify-between mb-2 text-green-600">
        <span className = "text-xl">Discount</span>
        <span className = "font-semibold text-xl">- Rs {discount}</span>
      </div>

      <div className="flex justify-between mb-2 text-green-600">
        <span className = "text-xl">Coupons for you</span>
        <span className = "font-semibold text-xl">- {coupon} %</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Protect Promise Fee</span>
        <span className = "font-semibold">Rs {protectFee}</span>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between text-xl font-bold mb-2">
        <span>Total Amount</span>
        <span>Rs {totalAmount}</span>
      </div>

      <p className="text-green-600 text-xl font-semibold">
        You will save <span className = "font-semibold text-xl text-indigo-600">Rs {totalSavings}</span> on this order
      </p>
    </div>
  );
};

export default CartTotalPrice;