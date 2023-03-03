import { useState } from "react"
import { Link } from "react-router-dom"
import AccNavbar from "./AccNavbar"
import Footer from "./Footer"

const Profile = () => {
    const [name, setName] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        console.log('form submitted')
        console.log(name)
    }
    return (
        <>
            <AccNavbar />
            <div className="profile-container">
                <div className="profile">
                    <header>
                        <h1>Profile</h1>
                        <button className="button">Change Password</button>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                        <input type="email" placeholder="Email"/>
                        <input type="tel" placeholder="Phone Number"/>
                        <Link to='/'>Update Profile</Link>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile