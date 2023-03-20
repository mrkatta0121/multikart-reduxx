import React from "react";
import "../styles/carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



    function Carousel ({children,settings}) {

        return (
            <div className="carousel-container">
              <Slider {...settings}>
                  {children}
              </Slider>
            </div>
          )}
    

    
   
    export default Carousel;