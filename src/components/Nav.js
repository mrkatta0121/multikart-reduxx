import React from "react";
import "../styles/Nav.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoGitCompare } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import {AiOutlineSetting} from "react-icons/ai";
import {CiShoppingBasket} from "react-icons/ci";
import { Badge } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./cart";

export default function Nav() {
    const [display,setDisplay]=useState(false);
    const cart = useSelector(state => state.Cart);

    return (
        <div className="Nav-container">


            <div className="first">
                <div className="div">
                    <h4>Welcome to Our store Multikart</h4>
                    <h4><BsFillTelephoneFill />Call Us: 123 - 456 - 7890</h4>
                </div>
                <div className="div">
                    <h4><GoGitCompare  className="ion"/>Compare</h4>
                    <h4><AiOutlineHeart  className="ion"/>Wishlist</h4>
                    <p>
                        <BsPerson className="ion"/>
                        <select>
                            <option>My account</option>
                            <option>Login</option>
                            <option>Register</option>
                        </select>
                    </p>
                </div>
            </div>




            <div className="second">
                <img src="https://multikart-react.vercel.app/assets/images/icon/logo/f6.png" />
                <div className="div1">
                    <select>
                        <option>HOME</option>
                    </select>
                    <select>
                        <option>SHOP</option>
                    </select>
                    <select>
                        <option>PRODUCTS</option>
                    </select>
                    <select>
                        <option>FEATURES</option>
                    </select>
                    <select>
                        <option>PAGES</option>
                    </select>
                    <select>
                        <option>BLOGS</option>
                    </select>
  
                    <span className="div2">
                        <AiOutlineSearch className="ions"/>
                        <AiOutlineSetting className="ions"/>
                        <p onClick={()=>setDisplay(true)}>Cart <Badge badgeContent={2} color="primary">
                      <CiShoppingBasket className="ions"/>
                        </Badge> </p>
                     
                    </span>
                    
                    
                </div>
            </div>
            <div><Cart pass={display} setPass={setDisplay}/></div>

        </div>
    )


}