
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import Slickhome1 from "../../component/slickslide/Slickhome1";
import SlickSlidercard from "../../component/slickslide/SlickSlidercard";
import OurStory  from "../../component/slickslide/OurStory";
import Form from "../../component/form/Form";
//images
import slider1img1 from "../../assets/images/homepage/homeSlider1/slick-slide-1.png"
import slider1img2 from "../../assets/images/homepage/homeSlider1/slick-slide-2.png"
import slider1img3 from "../../assets/images/homepage/homeSlider1/slick-slide-3.png"
import exploreimg1 from "../../assets/images/homepage/explore-1.jpg"
//css
import "./Homepage.css"


const Homepage = () => {

    const [selected, setSelected] = useState("Select a state");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const options = [
        { label: "Chennai", value: "Chennai" },
        { label: "Bangalore", value: "Bangalore" },
        { label: "Goa", value: "Goa" },
    ];
    const handleSelect = (value) => {
        setSelected(value);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    
    const slickSlider1=[
        {
            image:slider1img1,
            alt:"Slick Slide Image 1",
            link:false
        },
        {
            image:slider1img2,
            alt:"Slick Slide Image 2",
            link:false
        },
        {
            image:slider1img3,
            alt:"Slick Slide Image 3",
            link:false
        },
    ]

    
    
    return (
        <>
            <section className="home-sec-1-banner">
                <div className="container-fluid">
                    <div className="home-sec-1-inner">
                        <h2>S A SQUARE HOMES</h2>
                        <p>Where Every Corner Feels Like Home</p>
                    </div>
                </div>
            </section>

            <section className="home-sec-2">
                <div className="container-fluid">
                    <div className="home-sec2-search-box">
                        <div className="row home-search-row">
                            <div className="col-lg-3 col-md-4">
                                <label htmlFor="searchState" className="form-label">Location</label>
                                <div className="custom-select" ref={dropdownRef}>
                                    <div className="select-box" onClick={() => setIsOpen(!isOpen)}>
                                        {selected}
                                    </div>
                                    {isOpen && (
                                        <ul className="dropdown">
                                            {options.map((option) => (
                                                <li key={option.value} onClick={() => handleSelect(option.label)}>
                                                    {option.label}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <input type="hidden" name="State" value={selected} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <label htmlFor="searchState" className="form-label">Search</label>
                                <input type="text" className="form-input" placeholder="Property Name" />
                            </div>
                            <div className="col-lg-3 col-md-2">
                                <button className="search-btn">Search</button>
                            </div>
                        </div>
                    </div>

                    <div className="row home-sec2-row align-items-center">
                        <div className="col-md-6">
                            <h2 className="h-sec-2-title">Welcome To S A Square Homes</h2>
                            <p><strong>S A SQUARE HOUSE</strong>, your key to a smarter and more rewarding property journey in the vibrant city of Bangalore.</p>
                            <p>With our dedication to excellence and a genuine passion for real estate, we’re here to support you at every step. Experience a journey fueled by expertise, integrity, and your unique aspirations.</p>
                            <Link to="" className="read-more-hom-sec2">Read More <MdKeyboardArrowRight/></Link>
                        </div>
                        <div className="col-md-6">
                            <div id="slickSliderHome1">
                                <Slickhome1 items={slickSlider1}/>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-sec-3">
                <div className="container-fluid">
                    <h2 className="home-sec3-title">Our Properties</h2>
                    
                    <div className="row mt-5">
                        <div >
                            <SlickSlidercard/>
                        </div>  
                        
                    </div>
                </div>
            </section>

            <section className="home-sec-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                            <div className="row">
                                <div className="col-md-6 hom-sec4-h">
                                    <div className="home-sec4-inner-div">
                                        <h2 className="home-sec4-title">Why S A Square Homes Is The Perfect Choice?</h2>
                                    </div>
                                    <div className="home-sec4-inner-div">
                                        <h2 className="home-sec4-title">01.</h2>
                                        <h2 className="home-sec4-subtitle">Commitment to Sustainability</h2>
                                        <p className="home-sec4-text">We prioritize eco-friendly and sustainable development practices, ensuring that your property investment is not only valuable but also aligned with environmental standards.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 hom-sec4-h">
                                    <div className="home-sec4-inner-div">
                                        <h2 className="home-sec4-title">02.</h2>
                                        <h2 className="home-sec4-subtitle">Transparent Transactions</h2>
                                        <p className="home-sec4-text">We prioritize eco-friendly and sustainable development practices, ensuring that your property investment is not only valuable but also aligned with environmental standards.</p>
                                    </div>
                                    <div className="home-sec4-inner-div">
                                        <h2 className="home-sec4-title">03.</h2>
                                        <h2 className="home-sec4-subtitle">Comprehensive Support</h2>
                                        <p className="home-sec4-text">We prioritize eco-friendly and sustainable development practices, ensuring that your property investment is not only valuable but also aligned with environmental standards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="hom-sec4-form-wrap">
                                <h2 className="sec4-form-title">Enquiry Now!</h2>
                                <Form/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="home-sec-5">
                <div className="container-fluid">
                    <h2 className="home-sec3-title">Explore Areas</h2>
                    <div className="hom-sec5-flex">
                        <div className="home-sec5-width">
                            <img src={exploreimg1} alt="" className="w-100" />
                            <div className="hm-sec-5-btn">Manayata Tech Park</div>
                        </div>
                        <div className="home-sec5-width">
                            <img src={exploreimg1} alt="" className="w-100" />
                            <div className="hm-sec-5-btn">Manayata Tech Park</div>
                        </div>
                        <div className="home-sec5-width">
                            <img src={exploreimg1} alt="" className="w-100" />
                            <div className="hm-sec-5-btn">Manayata Tech Park</div>
                        </div>
                        <div className="home-sec5-width">
                            <img src={exploreimg1} alt="" className="w-100" />
                            <div className="hm-sec-5-btn">Manayata Tech Park</div>
                        </div>
                        <div className="home-sec5-width">
                            <img src={exploreimg1} alt="" className="w-100" />
                            <div className="hm-sec-5-btn">Manayata Tech Park</div>
                        </div>
                    </div>

                    <div className="container">
                        <h2 className="home-sec3-title">Our Clients</h2>
                        <OurStory/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage
