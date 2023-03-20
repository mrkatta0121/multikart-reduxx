import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slice/cartSlice";
import "../styles/productCard.css";
function ProductCard({ data }) {
    const cart = useSelector(state => state.Cart.items);
    console.log(cart);
    const dispatch = useDispatch();
    return (


        <div className="main">
            <img className="main-img" src={data.images[0].src} />
            <p>{data.brand}</p>
            <p>${data.price[0]} -${data.price[1]}</p>
            <span>
                <button className="clss" onClick={() => dispatch(addToCart(data))}>ADD</button>
                <button className="clss" onClick={() => dispatch(removeFromCart(data))}>remove</button>
            </span>
        </div>

    )
}
export default ProductCard;