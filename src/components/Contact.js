import Footer from "./Footer";
import Navbar from "./Navbar";
import Phone from "../assets/images/phone.svg";
import Email from "../assets/images/email.svg";
import Location from "../assets/images/location.svg";
import Map from "../assets/images/map.svg";

const Contact = () => {
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <div className="contact_page">
            <Navbar />
            <div className="back_logo">
                <h2>Contact Information</h2>
                <p>
                    Get in touch with our customer representative if any challenge.
                </p>
                <button className="button">Contact Us</button>
            </div>
            <div className="contact_us">
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
                <section className="map">
                    <h1>Find Us On Google Map</h1>
                    <img src={Map} alt="" />
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;