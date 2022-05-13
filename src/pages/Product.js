import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { setInfoProductThunk, setProductThunk } from "../redux/actions";
import { addProductToCart } from "../services";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productInfo)
  const productsArr = useSelector((state) => state.products)
  const [quantity, setQuantity] = useState(0)
  const [confirm, setConfirm] = useState(false)


  useEffect(() => {
    dispatch(setInfoProductThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product.category){
      dispatch(setProductThunk(product.category.id))
    }
  }, [ dispatch, product, productsArr, id])


  useEffect(() => {
    if (quantity && confirm){
      addProductToCart({
        product: id,
        quantity: quantity
      })
        .then((res) => {
          setConfirm(false)
        })
    }
  }, [id, quantity, confirm])

  const decrement = () => {
    if (quantity > 0){
      setQuantity(quantity -1)
    }
  }

  const productsList = productsArr?.map(item => <ProductItem key={item.id} prodObj={item} />)

  return (
    <div>
        <h1>{product.name}</h1>
        <button onClick={()=>navigate('/shop')} >Shop</button>
        <button onClick={()=>navigate('/cart')} >Cart</button>
        <div>
          <button onClick={decrement} >-</button>
          {quantity}
          <button onClick={() => setQuantity(quantity +1)} >+</button>
          <br />
          <button onClick={() => setConfirm(true)} >Add To Cart</button>
        </div>

        <p>{product.description}</p>
        {product.images?.map((item) => <img src={item.url} alt='' key={item.id}  style={{width:'200px', height:'auto'}} />)}
        <h1>Price: {product.price}$</h1>
        <br />
        <h2>You may be interested in:</h2>
        {productsList}
    </div>
  );
};

export default Product;