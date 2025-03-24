import { Link } from "react-router-dom";
//icons
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slickhome1.css"
const Slickhome1 = ({items}) => {
    const CustomPrevArrow = (props) => {
            const { onClick } = props;
            return <div className="custom-arrow custom-prev" onClick={onClick}><RiArrowLeftSLine /></div>;
        };
        
        const CustomNextArrow = (props) => {
            const { onClick } = props;
            return <div className="custom-arrow custom-next" onClick={onClick}><MdOutlineKeyboardArrowRight /></div>;
        };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>
    };
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                {items.map((item,index) => (
                    <div key={index} className="slide">
                        {item.link!==false ?
                            <Link to={item.link}>
                                <img src={item.image} alt={item.alt} />
                            </Link>
                        :
                            <img src={item.image} alt={item.alt} />
                        }
                    </div>
                ))}
                </Slider>
            </div>
        </>
    )
}

export default Slickhome1
