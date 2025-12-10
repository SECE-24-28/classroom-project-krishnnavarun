import Navbar from './components/Navbar'
import Cards from './components/Cards'
import { useState } from 'react'

const App = () => {

  const [items, setItems] = useState([
    { id: 1, title: "Polo Jersey", price: 799, qty: 1 },
    { id: 2, title: "Jogger Pants", price: 899, qty: 1 },
    { id: 3, title: "Tri-Color Jacket", price: 1999, qty: 1 }
  ]);

  return (
    <div className="bg-slate-200">
      <Navbar />
      <Cards items={items} setItems={setItems} />
    </div>
  );
};

export default App;