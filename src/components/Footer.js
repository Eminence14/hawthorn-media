import { Link } from "react-router-dom";
import Facebook from '../assets/images/facebook.svg';
import Instagram from '../assets/images/instagram.svg';
import Twitter from '../assets/images/twitter.svg';


const Footer = () => {
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
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Twitter} alt="" />
                </div>
                <div className="right">
                    Copyright &copy; Hawthorn Media 2023 All right reserved.
                </div>
            </section>
        </footer>
    );
}
 
export default Footer;