import { useState } from "react";

const Cards = (props) => {
    console.log(props)


    const {id,name,OriginalPrice,SellingPrice,image} = props;

    return(
        <>



            {/* Cards */}

            <div className="m-3 inline-block flex justify-center items-center">
            <div>
                <div className = "bg-white m-3 p-2 border-2 border-black w-[20vw] flex flex-col border-3 border-yellow-500 rounded-xl">
                    <img src = {image} alt="Description of image" className = "w-full h-40 object-cover rounded-md"/>

                    <div className = "space-y-1 mx-4">

                        <p className = "text-orange-500 text-lg mt-2 font-semibold">{name}</p>

                        <div className = "flex">
                            <p className = "text-orange-500 text-xl mt-1 font-semibold">Rs. {SellingPrice}</p>

                            <p className = "line-through decoration-red-600 text-red-500 text-xs mt-3 ml-3">Rs.{OriginalPrice}</p>
                        </div>

                        <button className = "border-3 w-full py-1 border-black-500 px-4 rounded-xl mt-2">Add To Cart</button>
                        
                    </div>
                </div> 
            </div>
            </div>

        
        </>
    )
}


export default Cards;