export default function Cart(){
    const item = {id:1,
        title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price:109.95,
        description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category:"men's clothing",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating:{"rate":3.9,"count":120}}
return(
    <div className="cartWrapper">
                <div className="cartCard">
                    <img src={item.image} alt="product" />
                    <h5>{item.title}</h5>
                    <h5>Price : ${item.price}</h5>
                    <button className="remove-btn">Remove from Cart</button>
                </div> 
                <div className="cartCard">
                    <img src={item.image} alt="product" />
                    <h5>{item.title}</h5>
                    <h5>Price : ${item.price}</h5>
                    <button className="remove-btn">Remove from Cart</button>
                </div> 
                <div className="cartCard">
                    <img src={item.image} alt="product" />
                    <h5>{item.title}</h5>
                    <h5>Price : ${item.price}</h5>
                    <button className="remove-btn">Remove from Cart</button>
                </div> 
                <div className="cartCard">
                    <img src={item.image} alt="product" />
                    <h5>{item.title}</h5>
                    <h5>Price : ${item.price}</h5>
                    <button className="remove-btn">Remove from Cart</button>
                </div> 
                </div>   
)
}