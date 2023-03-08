import { useLayoutEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AccNavbar from "./AccNavbar"
import Footer from "./Footer"
import Success from "../assets/images/success.svg"

const Profile = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [isPassword, setIsPassword] = useState(true);
    const [changeSuccess, setChangeSuccess] = useState(true);
    const [oldPwd, setOldPwd] = useState('')
    const [newPwd, setNewPwd] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        navigate('/dashboard')
    }
    function handleSubmit2(e) {
        e.preventDefault()
    }
    return (
        <div className="tablet">
            <AccNavbar />
            <div className="profile-container">
                {
                    isPassword
                        ?
                        <div className="profile">
                            <header>
                                <h1>Profile</h1>
                                <button className="button" onClick={() => setIsPassword(!isPassword)}>Change Password</button>
                            </header>
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                                <input type="email" placeholder="Email" />
                                <input type="tel" placeholder="Phone Number" />
                                <button type="submit">Update Profile</button>

                            </form>
                        </div>
                        :
                        <div className=" profile">
                            {
                                changeSuccess ?
                                    <div className="change-password">
                                        <header>
                                            <span style={{ fontSize: '1.4rem' }}>Change Password</span>
                                            <button style={{ fontSize: '2rem' }} onClick={() => setIsPassword(!isPassword)}>&times;</button>
                                        </header>
                                        <form onSubmit={handleSubmit2}>
                                            <input type="text" placeholder="Old Password" value={oldPwd} onChange={e => setOldPwd(e.target.value)} />
                                            <input type="password" placeholder="New Password" value={newPwd} onChange={e => setNewPwd(e.target.value)} />
                                            <button type="submit" className="button" onClick={() => setChangeSuccess(!changeSuccess)}>Change Password</button>
                                        </form>
                                    </div>
                                    :
                                    <div onLoad={() => {
                                        setTimeout(() => {
                                            navigate('/dashboard')
                                        }, 1000);
                                    }} style={{ padding: '5em', textAlign: 'center' }}>
                                        <img src={Success} alt="" style={{ display: 'block', margin: '0 auto' }} />
                                        <span style={{ fontSize: '1.2rem', margin: '1em 0', display: 'block' }} >SUCCESSFUL</span>
                                    </div>

                            }


                        </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Profile