import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ProductItem from "../components/ProductItem"
import Search from "../components/Search"
import { setCategoriesThunk, setProductByNameThunk, setProductThunk } from "../redux/actions"

const Shop = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const productArr = useSelector(state => state.products)
    const categoriesArr = useSelector(state => state.categories)

    const [currentCategory, setCurrentCategory] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const handlerSearchValue = (s) =>{
        setSearchValue(s)
    }

    useEffect(() => {
        dispatch(setProductThunk(currentCategory))
        dispatch(setCategoriesThunk())
    }, [dispatch, currentCategory])

    useEffect(() => {
        if (searchValue){
            dispatch(setProductByNameThunk(searchValue))
        }
        
    }, [searchValue, dispatch])

    const list = productArr?.map((item) => <ProductItem key={item.id} prodObj={item} />)
    const categoriesList = categoriesArr.map((item) => <button onClick={() => setCurrentCategory(item.id)} key={item.id} >{item.name}</button> )

    return (
        <div>
            <h1>Esta es mi tienda</h1>
            <Search handlerSearch={handlerSearchValue} />
            <button onClick={() => navigate('/cart')} >Cart</button>
            <br />
            <button onClick={() => setCurrentCategory('')} >All products</button>
            {categoriesList}
            {list}
        </div>
    )
}
export default Shop