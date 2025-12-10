import { useParams} from "react-router";

const ProductDetails = () => {
    const {id} = useParams();

    return (
        <>
        
            <div>Product Id : {id}</div>

        </>
    )
}


export default ProductDetails;