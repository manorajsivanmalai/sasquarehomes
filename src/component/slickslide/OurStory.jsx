

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurStory.css"
//images
import client1 from "../../assets/images/homepage/ourclient/client-01.png"
import client2 from "../../assets/images/homepage/ourclient/client-02.png"
import client3 from "../../assets/images/homepage/ourclient/client-03.png"
const OurStory = () => {

   const slickSlider1=[
           {
               image:client1,
               alt:"Slick Slide Image 1",
               link:false
           },
           {
               image:client2,
               alt:"Slick Slide Image 1",
               link:false
           },
           {
               image:client3,
               alt:"Slick Slide Image 1",
               link:false
           },
           
           {
               image:client1,
               alt:"Slick Slide Image 1",
               link:false
           },
           {
               image:client2,
               alt:"Slick Slide Image 1",
               link:false
           },
           {
               image:client3,
               alt:"Slick Slide Image 1",
               link:false
           },
           
           {
               image:client1,
               alt:"Slick Slide Image 1",
               link:false
           },
           {
               image:client2,
               alt:"Slick Slide Image 1",
               link:false
           },
           {
               image:client3,
               alt:"Slick Slide Image 1",
               link:false
           },
           
           {
               image:client1,
               alt:"Slick Slide Image 1",
               link:false
           },
           {
               image:client2,
               alt:"Slick Slide Image 1",
               link:false
           },
           {
               image:client3,
               alt:"Slick Slide Image 1",
               link:false
           },
           
          
       ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false ,
        responsive: [
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return (
        <>
            <div className="slider-container" id="cardsSlickSlide">
                <Slider {...settings} >
                    {slickSlider1.map((item, index) => (
                        <div key={index} className="slide text-center">
                            <img src={item.image}  />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}



export default OurStory
