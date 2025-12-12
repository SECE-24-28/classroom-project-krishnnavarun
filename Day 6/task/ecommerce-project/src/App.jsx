import { useState } from 'react';
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Cart from './components/Cart'
import Admin from './components/Admin'
import Footer from './components/Footer'



const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
    <div className = "bg-slate-100">
        <Navbar onPageChange={setCurrentPage} currentPage={currentPage}/>
        {currentPage === 'home' && <Cards/>}
        {currentPage === 'cart' && <Cart/>}
        {currentPage === 'admin' && <Admin/>}
        <Footer/>
    </div>
    </>
  );
};

export default App;