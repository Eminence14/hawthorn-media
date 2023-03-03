import Logo from '../assets/images/Hawthorn Studios Yellow.png';
import Hamburger from '../assets/images/hamburger.svg';
import Close from '../assets/images/close.svg';
import { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const opener = useRef()
    const closer = useRef()
    const overlay = useRef()
    function openHam() {
        opener.current.classList.add('active')
        closer.current.classList.add('active')
        overlay.current.classList.add('active')
    }
    function closeHam() {
        opener.current.classList.remove('active')
        closer.current.classList.remove('active')
        overlay.current.classList.remove('active')
    }
    return (
        <div className="navbar">
            <div className="overlay" ref={overlay} onClick={closeHam}></div>
            <img src={Logo} alt="" className='logo' />
            <nav className='mobile_nav'>
                <img src={Hamburger} alt="" className='hamburger' ref={opener} onClick={openHam} />
                <div ref={closer} className="closer">
                    <ul>
                        <img src={Close} alt="" className="close" onClick={closeHam} />
                        <NavLink to='/'
                            style={({ isActive }) => ({ color: isActive ? "#f5ba31" : "" })}>
                            Home
                        </NavLink>
                        <NavLink to='/about'
                            style={({ isActive }) => ({ color: isActive ? "#f5ba31" : "" })}>
                            About Us
                        </NavLink>
                        <NavLink to='/contact'
                            style={({ isActive }) => ({ color: isActive ? "#f5ba31" : "" })}>
                            Contact Us
                        </NavLink>
                        <NavLink to='/gallery'
                            style={({ isActive }) => ({ color: isActive ? "#f5ba31" : "" })}>
                            Gallery
                        </NavLink>

                        <div className="authenticate">
                            <Link to='/login'>Log In</Link>
                            <Link to='/register'>Register</Link>
                        </div>
                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;