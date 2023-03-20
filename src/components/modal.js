import { useEffect, useState } from "react"
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/modal.css";

export default function Model() {
    const [model, setModel] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setModel(true)
        },1000)
    }, [])
    return (
        <div className="model-container">
            <div className={model ? "model" : "model-none"}>
                <p onClick={() => setModel(false)} className="close"><AiOutlineClose /></p>
                <div className="model-content">
                    <img src="https://multikart-react.vercel.app/_next/static/media/Offer-banner.ff0b2a90.png" />
                <h1>NEWSLETTER</h1>
                    <input placeholder="ENTER YOUR EMAIL" />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )

}