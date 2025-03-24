import logo from "../../assets/images/logo/sa-logo.png"

import { Link,NavLink } from "react-router-dom";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2"
import { CgClose } from "react-icons/cg";

import "./Navbar.css"
import { useState } from "react";
const Navbar = () => {

    const [navtoggle,setNavtoggle]=useState(false)
    
    return (
        <>
            <header>
                <nav className="nav-wrapper">
                    <div className="container-fluid">
                        <div className="row align-items-center nav-r-wrapper">
                            <div className="col-lg-2 col-md-3 col-5 nav-logo-wrap">
                                <Link to="/" ><img src={logo} alt="logo" className="logo"/></Link>
                            </div>
                            <div className="col-lg-7 col-md-6 d-md-block d-none">
                                <ul className="nav-ul-1-wrapper">
                                    <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                                    <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                                    <li className="nav-item"><NavLink to="/properties" className="nav-link">Properties</NavLink></li>
                                    <li className="nav-item"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
                                    <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 d-md-block d-none">
                                <ul className="nav-ul-1-wrapper">
                                    <li className="nav-item"><Link to="/" className="nav-btn">Create a Listing</Link></li>
                                </ul>
                            </div>
                            <div className="col-7 d-md-none d-flex justify-content-end">
                                <button className="nav-toggle-btn" onClick={()=>setNavtoggle(true)}>
                                    <HiOutlineBars3CenterLeft/>
                                </button>
                                    <div className={`nav-mob-toggle d-md-none d-block ${navtoggle ? "toggleanimate":""}`}>
                                        <div className="d-flex align-items-center justify-content-between nav-log-wrap">
                                            <a href=""><img src={logo} alt="logo" className="logo"/></a>
                                            <button className="nav-mob-close-btn" style={!navtoggle?{"transform":"rotate(166deg)","translate":"1s"}:{}} onClick={()=>setNavtoggle(false)}><CgClose/></button>
                                        </div>
                                        <ul className="nav-mob-p-ul">
                                            <li className="nav-item"><Link to="/"  onClick={()=>setNavtoggle(false)}  className="nav-link">Home</Link></li>
                                            <li className="nav-item"><Link to="/about"  onClick={()=>setNavtoggle(false)}  className="nav-link">About</Link></li>
                                            <li className="nav-item"><Link to="/properties"  onClick={()=>setNavtoggle(false)}  className="nav-link">Properties</Link></li>
                                            <li className="nav-item"><Link to="/blog"  onClick={()=>setNavtoggle(false)}  className="nav-link">Blog</Link></li>
                                            <li className="nav-item"><Link to="/contact"  onClick={()=>setNavtoggle(false)}  className="nav-link">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar