import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteCartProductThunk } from "../redux/actions"

const CartProduct = ({prodObj}) => {

  const dispatch = useDispatch()
  const [deleteId, setDeleteID] = useState(null)

  useEffect(() => {
    if (deleteId){
      dispatch(deleteCartProductThunk(deleteId))
    }
  }, [dispatch, deleteId])

  return (
    <div>
        
        <h1>{prodObj.product.name}</h1>
        <h3>Cantidad: {prodObj.quantity}</h3>
        <h3>Total product: {prodObj.product.price * prodObj.quantity}$</h3>
        <br />
        <button onClick={() => setDeleteID(prodObj.id)} >❌</button>
    </div>
  )
}

export default CartProduct