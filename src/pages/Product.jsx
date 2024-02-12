import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/productsSlice"
import {addProduct} from "../redux/cartSlice.js";
import classes from "../sass/app.module.sass";

export default function Product() {

  const dispatch = useDispatch()
  const {products} = useSelector(state => state.productsReducer)


  useEffect(()=> {
    dispatch(fetchProducts())
  }, [])
    
  return (
    <div className={classes.card}>
      {products?.products?.map(item => (
        <div className={classes.minicard} key={item.id}>
          <img src={item.images[0]} alt="image" />
          <p>{item.brand}</p>
          <p>{item.price}</p>
          <button onClick={()=>{dispatch(addProduct(item))}}>Купить</button>
        </div>
      ))}
    </div>
  )
}
