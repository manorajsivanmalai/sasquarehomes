
import "./Header.css"
const Hearder = ({title,content = ""}) => {
    return (
        <>
            <section className="header-wraper">
                <div className="container-fluid">
                   <div className="head-inner">
                   <h1 className="header-title">{title}</h1>
                   {content.trim() !== "" && <p className="header-p">{content}</p>}
                   </div>
                </div>
            </section>
        </>
    )
}

export default Hearder
