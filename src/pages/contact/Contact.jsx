import Header from "../../component/header/Header"
import Form from "../../component/form/Form"
import "./Contact.css"
const Contact = () => {
    return (
        <>
            <Header title="Contact Us"/>

            <section className="contect-sec-2">
                <div className="container">
                    <div className="row align-items-center row-gap-5">
                        <div className="col-md-7">
                            <div className="contect-form-sec2">
                                <h2 className="contact-sec2-ft">Need Assistance? Contact Us</h2>
                                <Form/>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div>
                                <h1 className="con-sec2-st">For Enquiries contact:</h1>
                                <div className="con-sec-inner">
                                    <h1 className="con-sec2-st2">Head Office:</h1>
                                    <h1 className="con-sec2-c">6th cross Matakar Lane, Near talinfactory, HBR Layout, Bangalore – 560 043</h1>
                                </div>
                                <div className="con-sec-inner">
                                    <h1 className="con-sec2-st2">Phone:</h1>
                                    <h1 className="con-sec2-c">Sameer – +91 78994 45530</h1>
                                </div>
                                <div className="con-sec-inner">
                                    <h1 className="con-sec2-st2">Mail us at:</h1>
                                    <h1 className="con-sec2-c">hello@sasquarehomes.com</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
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
