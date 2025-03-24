import { FaWhatsapp,FaPhone,FaInstagram,FaFacebookF  } from "react-icons/fa";


import "./Stickynav.css"
import { Link } from "react-router-dom";

const Stickynav = () => {
    return (
        <>
            <div className="sticky-nav-wrap">
                <ul className="sticky-nav-ul">
                    <li className="sticky-whatsapp"><Link className="link-s"><FaWhatsapp/></Link></li>
                    <li className="sticky-phone"><Link className="link-s"><FaPhone/></Link></li>
                    <li className="sticky-instagram"><Link className="link-s"><FaInstagram/></Link></li>
                    <li className="sticky-fb"><Link className="link-s"><FaFacebookF/></Link></li>
                </ul>
            </div>
        </>
    )
}

export default Stickynav
