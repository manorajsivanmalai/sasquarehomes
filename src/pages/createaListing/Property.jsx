import React from 'react'
import "./Property.css"
import Header from "../../component/header/Hearder"
function Property() {
  return (
<>
<div className='cre-list-sec1'>
<Header title="Create Your Listing"/>
</div>


    <section className='property-section pt-4'>
        <div className="container">
            <div className="row">
                <div className="col-md-6 content-wrapper">
                    <h1>SA Square Homes </h1>
                    <p>Listing your property with SA Square Homes offers numerous advantages that can significantly enhance your selling or renting experience.</p>
                    <p>Our extensive marketing reach ensures your property is visible to a larger audience, increasing the likelihood of attracting serious buyers or tenants.</p>
                    <p>When you register with us, you’ll benefit from tailored support designed to meet your specific needs.</p>
                    <p>In addition, we prioritize building strong relationships with our clients. By connecting you with a focused and trustworthy group of prospective buyers, we ensure that your interactions are meaningful and productive. Our platform is designed to streamline communication, making it easier for you to engage with interested parties</p>
                    <p>Choose SA Square Homes to maximize your property’s potential and experience a seamless selling or renting process. Let us help you turn your property goals into reality!</p>
                </div>

                <div className="col-md-6 form-wrapper">
                    <form action="">
                        <div className='form-details'>
                        <label htmlFor="">Your Name</label>
                        <input type="text" name="" id="" />

                        </div>
                        <div className='form-details'>
                        <label htmlFor="">Your Email</label>
                        <input type="email" name="" id="" />

                        </div>
                        <div className='form-details'>
                        <label htmlFor="">Your Phone</label>
                        <input type="tel" name="" id="" />

                        </div>
                        <div className='form-details'>
                        <label htmlFor="">Property Details</label>
                        <input type="tel" name="" id="" />

                        </div>
                    </form>

                </div>
            </div>
        </div>
    </section>


</>

  )
}

export default Property
