import { useState,useEffect } from "react";

const Pagination = (props) => {

    const {currPage,setCurrentPage} = props;

    const previousPage = () => {
        setCurrentPage(currPage-1)
    }

    const nextPage = () => {
        setCurrentPage(currPage+1)
    }


    return(
        <>
            <div className = "w-[300px] mx-auto bg-yellow-500 m-4 p-4 rounded-md flex justify-center items-center shadow-xl">
                <button onClick = {previousPage} className = "bg-red-800 text-xl px-5 py-1 rounded-lg m-3 text-center" >{"<"}</button>
                
                <div className = "font-bold text-3xl">{currPage}</div>

                <button onClick = {nextPage} className = "bg-green-500 text-xl px-5 py-1 rounded-lg m-3">{">"}</button>
                
            </div>
        </>
    )
}

export default Pagination;