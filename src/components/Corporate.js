import AccNavbar from "./AccNavbar"
import Footer from "./Footer"

const Corporate = () => {
    return (
        <div className="tablet">
            <AccNavbar />
            <div style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                fontWeight: 'bold'
            }}>
                Coming soon!!!
            </div>
            <Footer />
        </div>
    )
}

export default Corporate