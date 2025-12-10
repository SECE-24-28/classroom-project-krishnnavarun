import ProductCard from "./ProductCard";

const ProductList = (props) => {

    // const products = [
    //     {
    //         id: 1,
    //         name: "Product 1",
    //         price: 100,
    //         image: "https://picsum.photos/id/2/300/300"
    //     },
    //     {
    //         id: 2,
    //         name: "Product 2",
    //         price: 200,
    //         image: "https://picsum.photos/id/27/300/300"
    //     },
    //     {
    //         id: 3,
    //         name: "Product 3",
    //         price: 300,
    //         image: "https://picsum.photos/id/26/300/300"
    //     },
    // ]

    const { products } = props;

    return (
        <div className = "flex justify-center bg-yellow-100 flex-wrap m-10">
            {products.map((product)=>{
                return (
                    <ProductCard id={product.id} name={product.name} price={product.price} image={product.image}/>
                )
            })}
        </div>
    )
}

export default ProductList;