//jsx : JavaScript XML
//elements created inside jsx are jsx elements not html elements

/* Steps:

    create a function
    function name and file name should be same
    return an html elements
    export the written or created function : export default functionName

*/

//import React from "react" is imported if we use <React.Fragment></React.Fragment> and if we use<></> no need to import this.
// import React from "react";

import { useState } from "react";
import StudentCard from "./components/StudentCard";
import Counter from "./components/Counter";
import UserDetails from "./components/UserDetails";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductsList";
import { GlobalProvider } from "./contexts/GlobalContext";

const App = () => {
  const [currPage, setCurrentPage] = useState(() => {
    const page = localStorage.getItem("page");
    return page ? parseInt(page) : 1;
  });

  let firstName = "John";
  let lastName = "Smith";
  let mobileNo = "1234567890";
  return (
    <>
      {/* <h1 className = "text-black text-2xl text-center font-bold underline mb-2">Student Details</h1>
      <StudentCard fname = {firstName} lname = {lastName} phone = {mobileNo} age = {18}/>

      {StudentCard({fname : firstName,lname : lastName, phone : mobileNo,age : 18})} */}

      {/* <Counter />
      <GlobalProvider>   */}
        {/* {Pagination({currPage:currPage,setCurrentPage :setCurrentPage})}; */}

        {/* Props Drilling : passing component inside another components */}
        {/* <UserDetails/>
        <Footer/>
      </GlobalProvider> */}

      <LoginForm />
      <ProductList/>
    </>
  );
};

export default App;
