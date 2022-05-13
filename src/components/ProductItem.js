import { Link } from "react-router-dom"

const ProductItem = ({prodObj}) => {
    return (
        <Link to={`/shop/${prodObj.id}`}>
            <div style={{margin: "20px"}}>
                {prodObj.name}
                <br />
                <img src={prodObj.images[0].url} style={{width:'200px', height:'auto'}} alt="" />
            </div>
        </Link>
    )
}

export default ProductItem