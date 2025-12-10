import { useState } from "react";
import Cards from "./Cards";

const AddToCards = (props) => {

    const {Products} = props;

    return(
        <div>
            
            {Products.map((product, index) => {
                return(
                    
                    <Cards
                    
                    key = {index}
                    name = {product.name}
                    OriginalPrice = {product.OriginalPrice}
                    SellingPrice = {product.SellingPrice}
                    image = {product.image}

                    />
              
                )
            })}

        </div>
    )
}


export default AddToCards;