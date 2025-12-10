const ProductCard=(props)=>{
    const {name,price,image}=props
    return(
        <div className="p-20">
        <div className="w-[300px] bg-slate-800 border-gray-400 border rounded-xl">
            <img src={image} alt={name} />
            <div className="p-5">
                <h1 className="font-bold text-white text-2xl ">{name}</h1>
                <p className="text-gray-300 text-lg mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit Aut expedita</p>
                <div className="text-white flex justify-between items-center mt-3">
                    <h3 className="font-semibold text-3xl">${price}</h3>
                    <button className="text-lg bg-blue-600 px-2 py-1 rounded-lg">Add To Cart +</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProductCard;