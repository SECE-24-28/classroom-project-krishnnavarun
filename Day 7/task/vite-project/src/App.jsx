import { useState } from 'react';
import AddToCards from './components/AddToCards';
import Form from './components/Form';
import Navbar from './components/Navbar';

const App = () => {
  
  if (localStorage.getItem("products") === null) {
    localStorage.setItem("products", JSON.stringify([]));
  }
  const [Products,setProducts] = useState(JSON.parse(localStorage.getItem("products")));


  const addToCart = (product) => {
    setProducts([...Products, product]);
    localStorage.setItem("products", JSON.stringify([...Products, product]));
  };
         


  return(

    <>
      <div className = "bg-white m-2 p-2 border-3 border-black  rounded-xl">

        <Navbar />

        <AddToCards Products={Products} />


        <Form addToCart={addToCart} />
      </div>
    </>

  )
};



export default App;