import { useLayoutEffect } from "react"
import { Link } from "react-router-dom"
import AccNavbar from "./AccNavbar"
import Footer from "./Footer"

const Services = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="tablet">
            <AccNavbar />
            <div className="services">
                <Link to='/services/videography'>Videography</Link>
                <Link to='/services/photography'>Photography</Link>
                <Link to='/services/studio'>Studio sessions</Link>
                <Link to='/services/corporate'>Corporate Events</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Services