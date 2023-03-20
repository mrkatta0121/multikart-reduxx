import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {v4 as uuid} from "uuid";
import { fetchHomepageData } from "../redux/slice/asyncSlice";

import "../styles/collections.css";
import ProductCards from "./productCards";


function Collections(){
    const data = useSelector(state => state.Homepage.items);
    console.log(data);
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(fetchHomepageData());
    },[])
    return(
        <div className="products">
            <span>
            <h6>Special Offer</h6>
            <h1>TOP COLLECTIONS</h1>
            <hr/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            <p>the industry's standard dummy text ever since the 1500s,</p>
            </span>
        <div className="allProduct">
            {data.map (e => <ProductCards key={uuid()} data={e}/>)}
        </div>
        </div>
    )
}
export default Collections;