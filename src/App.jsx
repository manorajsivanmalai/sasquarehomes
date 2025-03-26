

import { Routes,Route } from "react-router-dom"

import Homepage from "./pages/home/Homepage"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Blog from "./pages/blog/Blog"
import Properties from "./pages/properties/Properties"
import Navbar from "./component/navbar/Navbar"
import Footer from "./component/footer/Footer"
import Stickynav from "./component/stickynav/Stickynav"
import Property from "./pages/createaListing/Property"
import "./App.css"
const App = () => {
    return (
        <>  
            <Navbar/>
            <main className="main-wrap">
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/properties" element={<Properties/>} />
                    <Route path="/list-your-property" element={<Property/>} />
                </Routes>
            </main>
            <Footer/>
            <Stickynav/>

        </>
    )
}

export default App
