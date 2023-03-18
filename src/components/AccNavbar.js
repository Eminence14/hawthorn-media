import Hamburger from '../assets/images/hamburger.svg';
import Close from '../assets/images/close_black.svg';
import Logo from '../assets/images/Hawthorn Studios Yellow.png';
import DashImg from '../assets/images/dashboard.svg';
import BookImg from '../assets/images/bookings.svg';
import ServiceImg from '../assets/images/services.svg';
import ProfImg from '../assets/images/profile.svg';
import LogImg from '../assets/images/log_out.svg';
import { NavLink } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';
const AccNavbar = () => {

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
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="acc_navbar">

            <nav className="mobile_nav">
                <img src={Hamburger} alt="" className='hamburger' ref={opener} onClick={openHam} />
                <div className='acc_closer' ref={closer}>
                    <div className="opened_nav">
                        <img src={Logo} alt="" className='logo' />
                        <img src={Close} alt="" className='close' onClick={closeHam} />
                    </div>
                    <NavLink to='/dashboard'
                        style={({ isActive }) => ({ backgroundColor: isActive ? "#f5ba31" : "" })}>
                        <img src={DashImg} alt="" />
                        <span className='nav-titles'>Dashboard</span>
                    </NavLink>
                    <NavLink to='/booking'
                        style={({ isActive }) => ({ backgroundColor: isActive ? "#f5ba31" : "" })}>
                        <img src={BookImg} alt="" />
                        <span className='nav-titles'>Your bookings</span>
                    </NavLink>
                    <NavLink to='/services'
                        style={({ isActive }) => ({ backgroundColor: isActive ? "#f5ba31" : "" })}>
                        <img src={ServiceImg} alt="" />
                        <span className='nav-titles'>Services</span>
                    </NavLink>
                    <NavLink to='/profile'
                        style={({ isActive }) => ({ backgroundColor: isActive ? "#f5ba31" : "" })}>
                        <img src={ProfImg} alt="" />
                        <span className='nav-titles'>Profile</span>
                    </NavLink>
                    <NavLink to='/'
                        style={({ isActive }) => ({ backgroundColor: isActive ? "#f5ba31" : "" })}>
                        <img src={LogImg} alt="" />
                        <span className='nav-titles'>Log out</span>
                    </NavLink>
                </div>
            </nav>
            <div id="overlay" ref={overlay} onClick={closeHam}></div>
            <img src={Logo} alt="" className='logo' />
        </div>
    );
}

export default AccNavbar;