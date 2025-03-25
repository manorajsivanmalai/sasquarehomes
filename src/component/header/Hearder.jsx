
import "./Hearder.css"
const Hearder = ({title}) => {
    return (
        <>
            <section className="header-wraper">
                <div className="container-fluid">
                    <h1 className="header-title">{title}</h1>
                </div>
            </section>
        </>
    )
}

export default Hearder
