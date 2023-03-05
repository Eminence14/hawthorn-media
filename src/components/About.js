import { useLayoutEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Navbar />
            <div className="back_logo"></div>
            <section className="about_us">
                <h1>About Us</h1>
                <p>
                    Welcome to Hawthorn Studios, a media company specializing in videography, cinematography, and photography services. Our team of passionate professionals is dedicated to capturing life's most beautiful moments and turning them into stunning visual stories.
                    <br /> <br />
                    At Hawthorn Studios, we believe that every project is unique and deserves to be treated with the utmost care and attention to detail. Whether it's a corporate event, a wedding, or a personal project, we work closely with our clients to understand their vision and bring it to life in a way that exceeds their expectations.
                    <br /> <br />
                    Our videography services cover a wide range of styles, from cinematic storytelling to promotional videos for businesses. We use state-of-the-art equipment and the latest editing techniques to create videos that are not only visually stunning but also engaging and effective.
                    <br /> <br />
                    Our cinematography services are perfect for those looking for a more cinematic approach to their project. We use the latest technology and techniques to create films that are not only visually stunning but also emotionally impactful. Whether it's a short film, a music video, or a feature-length movie, we have the skills and expertise to make it a reality.
                    <br /> <br />
                    Our photography services are tailored to meet the needs of our clients, from portraits and headshots to product photography and event coverage. We have a keen eye for detail and a passion for capturing the essence of our subjects in every shot.
                    <br /> <br />
                    At Hawthorn Studios, we take great pride in our work and are committed to providing our clients with the highest quality services. We believe that every project is an opportunity to create something beautiful and unique, and we strive to make that vision a reality.
                    <br /> <br />
                    Thank you for considering Hawthorn Studios for your videography, cinematography, and photography needs. We look forward to working with you and creating something truly special.
                </p>
            </section>
            <Footer />
        </div>
    );
}

export default About;