import Navbar from "./Navbar";
import GallPreview1 from '../assets/images/gallery_preview1.jpeg'
import GallPreview2 from '../assets/images/gallery_preview2.jpeg'
import GallPreview3 from '../assets/images/gallery_preview_3.svg'
import Services from '../assets/images/our_services1.jpg'
import Services1 from '../assets/images/our_services1_1.svg'
import Ceo from '../assets/images/ceo_1.jpg'
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLayoutEffect } from "react";
import Logo from '../assets/images/Hawthorn Studios Yellow.png';

const Home = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <main className="home">
                <section className="hero">
                    <p>
                        Creating Timeless Moments. Capturing <span> Luxury </span> in Every Frame.
                    </p>
                    <Link to='/booking'>
                        <button>Book Us Now</button>
                    </Link>
                </section>
                <section className="gallery">
                    <div className="right_tri"></div>
                    <h2>Our Gallery</h2>
                    <div className="galleries">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={45}
                            slidesPerView={1.2}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <img src={GallPreview1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={GallPreview2} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={GallPreview3} alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <Link to="/gallery">View Our Gallery</Link>
                </section>
                <section className="services">
                    <h2>Our Services</h2>
                    <div>
                        <picture>
                            <source media="(min-width: 768px)" srcset={Services1} />
                            <img src={Services} alt="" />
                        </picture>
                        <div>
                            <ul id="our_services">
                                <li>Cinematography</li>
                                <li>Photography</li>
                                <li>Studio sessions</li>
                                <li>Videography</li>
                                <li>Cooperate events etc.</li>
                            </ul>
                            <Link to='/register'>
                                <button>Get Started</button>
                            </Link>
                        </div>

                    </div>

                </section>
                <section className="ceo">
                    <div className="left">
                        <img src={Ceo} alt="" />
                        <div></div>
                    </div>
                    <div className="right">
                        <h5>MR SAM HAWTHORN ULOKO</h5>
                        <h6>Chief Executive Officer</h6>
                    </div>
                </section>
                <section className="choose">
                    <h1>Why Choose Us?</h1>
                    <div>
                        <img src={Logo} alt="" className="choose-logo" />
                        <p>
                            At Hawthorn Media, we understand that your special moments are unique and deserves a personalized touch. Thats why we work closely with our clients to understand their needs and preferences, ensuring that every detail is captured just the way you envisioned it. Whether its your wedding day, a special event or a corporate project, we will ensure that you recieve a final product that tells your story in a beautiful, luxurious and compelling way, giving you a satisfactory feeling.
                        </p>
                    </div>
                </section>
                <section className="subscribe">
                    <h1>
                        Subscribe To Our News Letter.
                    </h1>
                    <form >
                        <label htmlFor="email">
                            Name
                        </label>
                        <input type="email" id="email" name='email' placeholder='Full Name' autoComplete='off' />

                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" id="email" name='email' placeholder='Email Address' autoComplete='off' />
                    </form>
                    <button>Subscribe</button>
                </section>
            </main>
            <Footer />
        </>

    );
}

export default Home;