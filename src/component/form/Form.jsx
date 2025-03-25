
import "./Form.css"

const Form = () => {
    return (
        <>
            <div className="sec4-form-din">
                <label htmlFor="" className="hom-form-label">Your name</label>
                <input type="text" className="hom-form-input" />
                <div className="form-error">Err</div>
            </div>
            <div className="sec4-form-din">
                <label htmlFor="" className="hom-form-label">Your email</label>
                <input type="mail" className="hom-form-input" />
            </div>
            <div className="sec4-form-din">
                <label htmlFor="" className="hom-form-label">Your phone</label>
                <input type="phone" className="hom-form-input" />
            </div >
            <div className="sec4-form-din">
                <label htmlFor="" className="hom-form-label">Subject</label>
                <input type="phone" className="hom-form-input" />
            </div >
            <div className="sec4-form-din">
                <label htmlFor="" className="hom-form-label">Your message</label>
                <textarea name="" id="" className="hom-form-input" rows="4"></textarea>
            </div>

            <div>
                <button className="form-sumnit">Submit</button>
            </div>
        </>
    )
}

export default Form
