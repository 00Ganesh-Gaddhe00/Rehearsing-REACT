import {useSelector, useDispatch} from 'react-redux';
import { removefromcart } from '../Reduxstore/cartSlice';


export default function Cart(){

    
        const items = useSelector((state)=>state.cart)
        console.log(items)
        const dispatch = useDispatch();

    function handleremove(itemid){
        dispatch(removefromcart(itemid));
    }

return(
    <div className="cartWrapper">
        {items.map((item)=>{
            return(
                <div key={item.id} className="cartCard">
                <img src={item.image} alt="product" />
                <h5>{item.title}</h5>
                <h5>Price : ${item.price}</h5>
                <button onClick={()=>handleremove(item.id)} className="remove-btn">Remove from Cart</button>
            </div> 
            )
        })}
            
                
                </div>   
)
}