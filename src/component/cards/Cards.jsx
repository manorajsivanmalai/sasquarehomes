import { Link } from "react-router-dom"


import Slickhome1 from "../slickslide/Slickhome1"
import "./Cards.css"

//icons

import { IoBedOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";

const Cards = ({items}) => {

    return (
        <>
            <div className="card-wrapper">
                <div className="card-head">
                    <Slickhome1 items={items.images}/>
                    <div className="card-tag">
                        <p>For Sale</p>
                    </div>
                    <div className="card-price">
                        <p>₹1,51,00,000</p>
                    </div>
                </div>
                <div className="card-body">
                    <Link className="card-title">{items.title}</Link>
                    <p className="card-content">{items.content}</p>
                    <div className="card-body-inner">
                        <div className="card-body-icon">
                            <IoBedOutline/>
                            <span>2</span>
                        </div>
                        <div className="card-body-icon">
                            <TfiRulerAlt2/>
                            <span>1099</span>
                            <span className="sqft">Sq Ft</span>
                        </div>
                    </div>
                    <p className="card-type">{items.areatype}</p>
                    <div className="text-end">
                        <Link className="card-btn">Details</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cards
