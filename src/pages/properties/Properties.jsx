
import Cards from "../../component/cards/Cards"

import "./Properties.css"
//images
import slider1img1 from "../../assets/images/homepage/homeSlider1/slick-slide-1.png"
import slider1img2 from "../../assets/images/homepage/homeSlider1/slick-slide-2.png"
import slider1img3 from "../../assets/images/homepage/homeSlider1/slick-slide-3.png"
const Properties = () => {
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
            <section className="prop-sec-1">
                <div className="container">
                    <h2 className="pro-title">All Properties</h2>
                    <div className="row  prop-sec1-row">
                    {cards.map((item)=>(
                        <div className="col-lg-4 col-md-6 card-prop-sec1">
                            <Cards items={item}/>
                        </div>
                    )
                    )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Properties
