import { useEffect, useState } from "react"
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { addtocart } from "../Reduxstore/cartSlice";


export default function Product(){

const [products, setproducts] = useState([]);
const dispatch = useDispatch();

useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
        setproducts(res.data);
    })
},[])

      function Handleaddtocart(product){
            dispatch(addtocart(product))
      }

    return(
        <div className="productsWrapper">
            {products.map((product)=>{
                return(
                    <div key={product.id} className="card">
                    <img src={product.image} alt="product"/>
                    <h6>{product.title}</h6>
                    <h5>{product.price}</h5>
                    <button onClick={()=>Handleaddtocart(product)} className="btn">Add to Cart</button>
                    </div>
                )
            })}
        
        
        </div>
    )
}