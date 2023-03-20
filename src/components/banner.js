import Carousel from "./carousel";
import "../styles/banner.css";
import {v4 as uuid} from "uuid";


const Banner = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:10000,
      className:"center",
      centerMode: true,
      centerPadding: "0px",


    };
    const data =["https://multikart-react.vercel.app/assets/images/home-banner/44.jpg",
    "https://multikart-react.vercel.app/assets/images/home-banner/43.jpg"];



return(
        <div >
            <Carousel settings={settings} >
            {data.map(e => {
                return(
                    <div key={uuid()} className="banner-container">
                        <img src={e} alt='img' className="banner-img"/>
                    </div>
                )
            })}
            </Carousel>
            <div className="pos">
                <h5>SUMMER SALE</h5>
                <h2>PROTIEN SHAKE</h2>
                <button>SAVE UPTO 50% OFF</button>
            </div>
        </div>
    )
}
export default Banner;