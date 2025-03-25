import Hearder from "../../component/header/Hearder"

import "./Contact.css"
const Contact = () => {
    return (
        <>
            <Hearder title="Contact Us"/>

            <section>
                <div className="container"></div>
            </section>

            <section>
                <div className="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227788.07983622674!2d77.46612495987436!3d12.954280237773864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1742894480504!5m2!1sen!2sin" width="100%" height="450"   loading="lazy" ></iframe>
                </div>
            </section>
        </>
    )
}

export default Contact
