import { useLayoutEffect } from "react"
import { Link } from "react-router-dom"
import AccNavbar from "./AccNavbar"
import Footer from "./Footer"
import VidImg from "../assets/images/services-icon/videography.svg"
import PhotoImg from "../assets/images/services-icon/photography.svg"
import StudImg from "../assets/images/services-icon/studio.svg"
import CorpImg from "../assets/images/services-icon/corporate.svg"

const Services = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="tablet">
            <AccNavbar />
            <div className="main-services">

                <h1>Select a Service</h1>
                <p>Find the perfect Package for you at hawthorn.</p>

                <section className="service-cards">
                    <Link to='/services/videography' className="service-card">
                        <img src={VidImg} alt="" />
                        <h3>Videography</h3>
                    </Link>
                    <Link to='/services/photography' className="service-card">
                        <img src={PhotoImg} alt="" />
                        <h3>Photography</h3>
                    </Link>
                    <Link to='/services/studio' className="service-card">
                        <img src={StudImg} alt="" />
                        <h3>Studio sessions</h3>
                    </Link>
                    <Link to='/services/corporate' className="service-card">
                        <img src={CorpImg} alt="" />
                        <h3>Corporate events</h3>
                    </Link>
                </section>

            </div>
            <Footer />
        </div>
    )
}

export default Services