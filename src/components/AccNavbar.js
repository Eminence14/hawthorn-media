import Hamburger from '../assets/images/hamburger.svg';
import Close from '../assets/images/close.svg';
import Logo from '../assets/images/Hawthorn Studios Yellow.png';
import DashImg from '../assets/images/dashboard.svg';
import BookImg from '../assets/images/bookings.svg';
import ServiceImg from '../assets/images/services.svg';
import ProfImg from '../assets/images/profile.svg';
import LogImg from '../assets/images/log_out.svg';
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';
const AccNavbar = () => {
    return (
        <div className="acc_navbar">
            <nav className="mobile_nav">
                <img src={Hamburger} alt="" className='hamburger' />
                <div className='closer'>
                    <div className="opened_nav">
                        <img src={Logo} alt="" className='logo' />
                        <img src={Close} alt="" className='close' />
                    </div>
                    <NavLink to='/dashboard'
                        style={({ isActive }) => ({ backgroundColor: isActive ? "#f5ba31" : "" })}>
                            <img src={DashImg} alt="" />
                        Dashboard
                    </NavLink>
                    <NavLink to='/dashboard'
                        style={({ isActive }) => ({ backgroundColor: isActive ? "#f5ba31" : "" })}>
                            <img src={BookImg} alt="" />
                        Your bookings
                    </NavLink>
                    <NavLink to='/dashboard'
                        style={({ isActive }) => ({ backgroundColor: isActive ? "#f5ba31" : "" })}>
                            <img src={ServiceImg} alt="" />
                        Services
                    </NavLink>
                    <NavLink to='/dashboard'
                        style={({ isActive }) => ({ backgroundColor: isActive ? "#f5ba31" : "" })}>
                            <img src={ProfImg} alt="" />
                        Profile
                    </NavLink>
                    <NavLink to='/dashboard'
                        style={({ isActive }) => ({ backgroundColor: isActive ? "#f5ba31" : "" })}>
                            <img src={LogImg} alt="" />
                        Log out
                    </NavLink>
                </div>
            </nav>
            <img src={Logo} alt="" className='logo' />
        </div>
    );
}

export default AccNavbar;