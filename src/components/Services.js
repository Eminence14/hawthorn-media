import { useLayoutEffect } from "react"
import AccNavbar from "./AccNavbar"
import Footer from "./Footer"

const Services = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="tablet">
            <AccNavbar />
            <div className="services" style={{ padding: '5em 2em', backgroundColor: '#0001' }}>
            </div>
            <Footer />
        </div>
    )
}

export default Services