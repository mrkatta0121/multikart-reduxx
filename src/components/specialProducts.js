import React from "react";
import "../styles/specialProducts.css";


export default function Special() {

    return (
        <div className="special">
            <span>
                <h6>Special Offer</h6>
                <h1>TOP COLLECTIONS</h1>
                <hr />
            </span>
            <div className="specialproduct">
                <div className="special1">
                    <img src="https://multikart-react.vercel.app/assets/images/gym/blog/4.jpg" />
                    <h4>26 january 2018</h4>
                    <h2>LOREM IPSEM DOLOR SIT CONSECTUR</h2>
                    <h2>ADIPISCIG ELIT</h2>
                    <p>by:by: john dio ,2 Comment</p>
                </div>
                <div className="special2">
                    <img src="https://multikart-react.vercel.app/assets/images/gym/blog/1.jpg" />
                    <h4>26 january 2018</h4>
                    <h2>LOREM IPSEM DOLOR SIT CONSECTUR</h2>
                    <h2>ADIPISCIG ELIT</h2>
                    <p>by:by: john dio ,2 Comment</p>
                </div>
                <div className="special3">
                    <img src="https://multikart-react.vercel.app/assets/images/gym/blog/5.jpg" />
                    <h4>26 january 2018</h4>
                    <h2>LOREM IPSEM DOLOR SIT CONSECTUR</h2>
                    <h2>ADIPISCIG ELIT</h2>
                    <p>by:by: john dio ,2 Comment</p>
                </div>

            </div>
        </div>
    )

}