import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {v4 as uuid} from "uuid";
import { fetchHomepageData } from "../redux/slice/asyncSlice";
import ProductCard from "./productCard";
import "../styles/collection.css";


function Collection(){
    const data = useSelector(state => state.Homepage.items);
    console.log(data);
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(fetchHomepageData());
    },[])
    return(
        <div className="product">
            <span>
            <h6>Special Offer</h6>
            <h1>TOP COLLECTIONS</h1>
            {/* <hr/> */}
            </span>
        <div className="allProducts">
            {data.map (e => <ProductCard key={uuid()} data={e}/>)}
        </div>
        </div>
    )
}
export default Collection;