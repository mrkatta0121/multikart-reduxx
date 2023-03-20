import React from "react";

import "../styles/footer.css";

export default function Footer() {


    return (
        <div className="footer-container">



            <div className="footer-first">
                <div className="first1">
                    <img src="https://multikart-react.vercel.app/assets/images/icon/logo/f6.png" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <hr />
                <div className="second2">
                    <h1>NEWSLETTER</h1>
                    <input placeholder="ENTER YOUR EMAIL" />
                    <button>SUBSCRIBE</button>
                </div>
                <hr />
                <div className="third3">
                    <h3>STORE INFORMATION</h3>
                    <p>Multikart Demo Store, Demo store India 345-659
                        Call Us: 123-456-7898
                        Email Us: Support@Fiot.com
                        Fax: 123456</p>
                </div>
            </div>
            <hr className="hr" />




            <div className="footer-second">

                <div className="one1">
                    <h3>MY ACCOUNT </h3>
                    <span>
                        <h5>Mens</h5>
                        <h5>Womens</h5>
                        <h5>Clothing</h5>
                        <h5>Accessories</h5>
                        <h5>Featured</h5>
                    </span>
                </div>
                <div className="two2">
                    <h3>WHY WE CHOOSE </h3>
                    <span>
                        <h5>Shipping & Return</h5>
                        <h5>Secure Shopping</h5>
                        <h5>Gallary</h5>
                        <h5>Affiliates</h5>
                        <h5>Contacts</h5>
                    </span>
                </div>
               
            </div>
            <div className="three3">
                    <p> 2021-22 themeforest powered by pixelstrap</p>
                    <div className="img">
                        <img src="https://multikart-react.vercel.app/assets/images/icon/visa.png" />
                        <img src="https://multikart-react.vercel.app/assets/images/icon/mastercard.png" />
                        <img src="https://multikart-react.vercel.app/assets/images/icon/paypal.png" />
                        <img src="https://multikart-react.vercel.app/assets/images/icon/american-express.png"/>
                        <img src="https://multikart-react.vercel.app/assets/images/icon/discover.png" />
                    </div>
                </div>

        </div>
    )


}