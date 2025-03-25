
import { FaFacebook ,FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Link} from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer className="footer-wrapper">
                <div className="footer-row-1">
                <div className="container">
                    <div className="row row-gap-3">
                        <div className="col-lg-5 col-md-5">
                            <p className="footer-c1">At S A Square Homes, we provide unmatched expertise and a tailored approach, ensuring that every investment aligns with your unique goals. Partner with us to turn your real estate dreams into reality.</p>
                            <p className="footer-c2">RERA NO: PRM/KA/RERA/1251/309/AG/240723/005003</p>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <h3 className="footer-title">Quick Links</h3>
                            <ul className="foooter-ul">
                                <li className="footer-item"><Link className="footer-link">Home</Link></li>
                                <li className="footer-item"><Link className="footer-link">About</Link></li>
                                <li className="footer-item"><Link className="footer-link">Properties</Link></li>
                                <li className="footer-item"><Link className="footer-link">Blogs</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <h3 className="footer-title">Head Office</h3>
                            <ul className="foooter-ul">
                                <li className="footer-item"><p className="footer-link">6th Cross, Matakar Lane Near Talin Factory HBR Layout Bangalore - 560043</p></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                        <h3 className="footer-title">Get in Touch</h3>
                            <ul className="foooter-ul">
                                <li className="footer-item"><Link to="mailto:hello@sasquarehomes.com"  className="footer-link">hello@sasquarehomes.com</Link></li>
                                <li className="footer-item"><Link to="tel:7899445530"  className="footer-link">+91 78994 45530</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <div className="footer-row-2">
                    <div className="container">
                        <div className="row row-gap-3">
                            <div className="col-md-5 col-12">
                                <p className="footer-comp">© SA Square Homes - All rights reserved</p>
                            </div>
                            <div className="col-md-4 col-6">
                                <ul className="footer-social-ul">
                                    <li><Link className="footer-social-link foot-fb"><FaFacebook/></Link></li>
                                    <li><Link className="footer-social-link  foot-yt"><FaYoutube/></Link></li>
                                    <li><Link className="footer-social-link"><FaXTwitter/></Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-6"></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
