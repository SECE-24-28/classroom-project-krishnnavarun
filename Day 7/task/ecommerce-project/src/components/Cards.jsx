import TotalPrice from "./TotalPrice";
import tshirt1 from "../assets/t-shirt1.jpg";
import tshirt3 from "../assets/t-shirt3.jpg";
import Baggyphant from "../assets/BaggyPhant.png";

const Cards = (props) => {


    const { items, setItems } = props;

  const handleDecrementQty = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  const handleIncrementQty = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const images = [tshirt1, Baggyphant, tshirt3];

  return (
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
                    <h1 className="text-gray-900 text-xl font-bold">
                      ₹ {price} Only
                    </h1>
                  </div>

                  <div className="flex justify-center space-x-5">
                    <button
                      className="p-2 border-2 rounded-xl w-10"
                      onClick = {() => handleDecrementQty(id)}
                    >
                      -
                    </button>

                    <span className="p-2 border-2 rounded-xl w-10 text-center">
                      {qty}
                    </span>

                    <button
                      className="p-2 border-2 rounded-xl w-10"
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
        <TotalPrice items={items} />
      </div>
    </div>
  );
};

export default Cards;
