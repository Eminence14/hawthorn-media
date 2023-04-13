import { Link } from "react-router-dom";
import Facebook from '../assets/images/facebook.svg';
import Instagram from '../assets/images/instagram.svg';
import Twitter from '../assets/images/twitter.svg';
import WhatsApp from '../assets/images/whatsapp.svg'


const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <section className="top">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/gallery">Gallery</Link>
            </section>
            <hr />
            <section className="bottom">
                <div className="left">
                    <Link to='/'><img src={Facebook} alt="" /></Link>
                    <Link to='/'><img src={Instagram} alt="" /></Link>
                    <Link to='/'><img src={Twitter} alt="" /></Link>
                    <Link to='https://api.whatsapp.com/send?phone=+2347056682385&text=Hi%20Hawthorn%20media%2C%20my%20name%20is%20_____' target="_blank"><img src={WhatsApp} alt="" /></Link>
                </div>
                <div className="right">
                    Copyright &copy; Hawthorn Media {currentYear} All right reserved.
                </div>
            </section>
        </footer>
    );
}

export default Footer;