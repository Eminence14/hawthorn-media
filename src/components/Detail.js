import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import AccNavbar from "./AccNavbar"
import Footer from "./Footer"

const Detail = () => {
    const [isLoading, setIsLoading] = useState(false)
    const submitButt = useRef()
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        submitButt.current.disabled = true;
        setTimeout(() => {
            navigate('/')
            setIsLoading(false)
            submitButt.current.disabled = false;
        }, 1500);
    }

    return (
        <div className="tablet">
            <AccNavbar />
            <div className="details-container">
                <header className="details-header">
                    <h1>Fill in your Details</h1>
                </header>
                <main className="details-body">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="name" id="name" placeholder="full name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type='email' name="email" id="email" placeholder="email" />
                        </div>
                        <div>
                            <label htmlFor="number">Phone Number</label>
                            <input type='number' name="number" id="number" placeholder="phone number" />
                        </div>
                        {/* <div>
                    State
                    </div> */}
                        {/* <div>
                        {city}
                    </div> */}
                        <div>
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" placeholder="address" />
                        </div>
                        {/* <div>
                        service date
                    </div> */}
                        <button type="submit" className="button" ref={submitButt}>Proceed to make payment</button>
                        {isLoading && <div>Loading...</div>}
                    </form>
                </main>
            </div>
            <Footer />

        </div>
    )
}

export default Detail