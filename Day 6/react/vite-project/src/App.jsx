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

import { useState } from 'react';
import StudentCard from './components/StudentCard';
import Counter from './components/Counter';
import UserDetails from './components/UserDetails';
import Pagination from './components/Pagination';



const App = () =>{

  const[currPage,setCurrentPage] = useState(1);

  let firstName = "John";
  let lastName = "Smith";
  let mobileNo = "1234567890"
  return (
    <>

      <h1 className = "text-black text-2xl text-center font-bold underline mb-2">Student Details</h1>
      {/* <StudentCard fname = {firstName} lname = {lastName} phone = {mobileNo} age = {18}/> */}

      {StudentCard({fname : firstName,lname : lastName, phone : mobileNo,age : 18})}

      <Counter />

      <UserDetails currPage = {currPage}/>

      {Pagination({currPage:currPage,setCurrentPage :setCurrentPage})};

    </>


  )
}

export default App;