

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlidercard.css"

import Cards from "../cards/Cards";
//images
import slider1img1 from "../../assets/images/homepage/homeSlider1/slick-slide-1.png"
import slider1img2 from "../../assets/images/homepage/homeSlider1/slick-slide-2.png"
import slider1img3 from "../../assets/images/homepage/homeSlider1/slick-slide-3.png"
const SlickSlidercard = () => {

    const CustomPrevtext = (props) => {
        const { onClick } = props;
        return <div className="custom-arrow custom-prev" ><button onClick={onClick}>Prev</button></div>;
    };

    const CustomNexttext = (props) => {
        const { onClick } = props;
        return <div className="custom-arrow custom-next"><button onClick={onClick}>Next</button></div>;
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevtext />,
        nextArrow: <CustomNexttext />,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const cards = [
        {
            images: [
                {
                    image: slider1img1,
                    alt: "Slick Slide Image 1",
                    link: true
                },
                {
                    image: slider1img2,
                    alt: "Slick Slide Image 2",
                    link: true
                },
                {
                    image: slider1img3,
                    alt: "Slick Slide Image 3",
                    link: true
                },
            ],
            title: "Atco La Vivant",
            content: "Attebele road, BEML Cooperative Society Layout, Bengaluru, Karnataka 562125",
            bhk: 2,
            sqft: 1992,
            areatype: "Residential"
        },
        {
            images: [
                {
                    image: slider1img1,
                    alt: "Slick Slide Image 1",
                    link: true
                },
                {
                    image: slider1img2,
                    alt: "Slick Slide Image 2",
                    link: true
                },
                {
                    image: slider1img3,
                    alt: "Slick Slide Image 3",
                    link: true
                },
            ],
            title: "Atco La Vivant",
            content: "Attebele road, BEML Cooperative Society Layout, Bengaluru, Karnataka 562125",
            bhk: 2,
            sqft: 1992,
            areatype: "Residential"
        },
        {
            images: [
                {
                    image: slider1img1,
                    alt: "Slick Slide Image 1",
                    link: true
                },
                {
                    image: slider1img2,
                    alt: "Slick Slide Image 2",
                    link: true
                },
                {
                    image: slider1img3,
                    alt: "Slick Slide Image 3",
                    link: true
                },
            ],
            title: "Atco La Vivant",
            content: "Attebele road, BEML Cooperative Society Layout, Bengaluru, Karnataka 562125",
            bhk: 2,
            sqft: 1992,
            areatype: "Residential"
        },
        {
            images: [
                {
                    image: slider1img1,
                    alt: "Slick Slide Image 1",
                    link: true
                },
                {
                    image: slider1img2,
                    alt: "Slick Slide Image 2",
                    link: true
                },
                {
                    image: slider1img3,
                    alt: "Slick Slide Image 3",
                    link: true
                },
            ],
            title: "Atco La Vivant",
            content: "Attebele road, BEML Cooperative Society Layout, Bengaluru, Karnataka 562125",
            bhk: 2,
            sqft: 1992,
            areatype: "Residential"
        },
    ]
    return (
        <>
            <div className="slider-container" id="cardsSlickSlide">
                <Slider {...settings} >
                    {cards.map((item, index) => (
                        <div key={index} className="slide ">
                            <Cards items={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}


export default SlickSlidercard
