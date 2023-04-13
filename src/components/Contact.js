import Footer from "./Footer";
import Navbar from "./Navbar";
import Phone from "../assets/images/phone.svg";
import Email from "../assets/images/email.svg";
import Location from "../assets/images/location.svg";
import Map from "../assets/images/map.svg";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    function handleSubmit(e) {
        e.preventDefault()
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="contact_page">
            <Navbar />
            <div className="back_logo">
                <h2>Contact Information</h2>
                <p>
                    Get in touch with our customer representative if any challenge.
                </p>
                <Link to='tel:+2347056682385' className="button">Contact Us</Link>
            </div>
            <div className="contact_us">
                <div>
                    <section className="contact_info">
                        <div className="info_card">
                            <img src={Phone} alt="" />
                            <div className="info_numbers">
                                <h3 className="title">
                                    Phone Number
                                </h3>
                                <span>+2348067436552</span>
                            </div>
                        </div>
                        <div className="info_card">
                            <img src={Email} alt="" />
                            <div className="info_numbers">
                                <h3 className="title">
                                    Email Address
                                </h3>
                                <span>Studiosbyhawthorn@gmail.com</span>
                            </div>
                        </div>
                        <div className="info_card">
                            <img src={Phone} alt="" />
                            <div className="info_numbers">
                                <h3 className="title">
                                    Fax Number
                                </h3>
                                <span>+2349136000234</span>
                            </div>
                        </div>
                        <div className="info_card">
                            <img src={Location} alt="" />
                            <div className="info_numbers">
                                <h3 className="title">
                                    Location
                                </h3>
                                <span>
                                    Hawthorn studios,170 Ademola Adetokunbo Crescent,Wuse 2, Abuja Nigeria.
                                </span>
                            </div>
                        </div>
                    </section>
                    <section className="send_message">
                        <h3>Send Message</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email Address" />
                            <input type="tel" placeholder="Phone Number" />
                            <textarea placeholder="Message"></textarea>
                            <button className="button">Submit</button>
                        </form>
                    </section>
                </div>


                <section className="map">
                    <h1>Find Us On Google Map</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.818476708246!2d7.4857576!3d9.0802955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bed185d5e79%3A0x920ef91f1e5d993!2sHawthorn%20Studios%2C%20Abuja!5e0!3m2!1sen!2sng!4v1678273628607!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;