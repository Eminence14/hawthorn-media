import Navbar from "./Navbar";
import GallPreview1 from '../assets/images/Jeleela.jpeg'
import GallPreview2 from '../assets/images/gallery_preview2.jpeg'
import GallPreview3 from '../assets/images/gallery_preview3.png'
import Services from '../assets/images/our_services1.jpg'
import Services1 from '../assets/images/our_services1_1.svg'
import Ceo from '../assets/images/ceo_1.jpg'
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Logo from '../assets/images/Hawthorn Studios Yellow.png';
import FAQ from "./Faqs";

const Home = () => {
    window.scrollTo(0, 0)
    const questions = [
        {
            title: 'WILL THE FILMING GET IN THE WAY OF THE WEDDING?',
            answer: 'We will try to be as discreet as possible and hopefully, you will forget we are even there, in some some cases, we may provide a small amount of direction during the course of your day, we do ask for a small amount of time alone with the bride and groom after the ceremony if time permits, but mostly the nature of our films means we want you to behave naturally so we can blend ino the  background and capture those special moments when you least expect it.'
        },
        {
            title: 'DO YOU CHARGE A DEPOSIT FOR MAKING A BOOKING?',
            answer: 'Yes to secure your booking for our services and save the date, we ask for a non-refundable deposit for all of our wedding film & photo collections. The deposit is paid when the contract is signed, with the remaining balance to be paid 8weeks prior to your big day.'
        },
        {
            title: 'CAN WE CANCEL AT ANY TIME?',
            answer: 'Cancellation must be made in writing and we will retain N0.00 booking fee unless we find a replacement booking for your date. If you cancel 12 weeks before your wedding, the full payment is due, we strongly recommend you take out wedding insurance to cover any loss you could incur for cancelling or postponing your wedding due to unforseen circumstances. If you have any other question feel free to contact us by checking our contact page and we will get back to you as soon as possible'
        },
        {
            title: 'HOW WILL THE WEDDING CINEMATOGRAPHERS BE DRESSED?',
            answer: 'We dress as smart as standard to assure we blend in with your wedding guests so that our presence is as non-intrusive as possible.'
        },
        {
            title: 'HOW LONG UNTIL I RECIEVE MY WEDDING VIDEO?',
            answer: 'All our films are different and take different amounts of time to produce. We would only deliver a wedding video if we are 100% happy with it, which takes around 14-28 days (stated in the contract), but in most cases can be much sooner.'
        },
        {
            title: 'CAN I CHOOSE THE MUSIC FOR MY WEDDING FILM?',
            answer: 'Unfortunately not. Due to copyright licensing, we do not allow our clients to choose the music for the video. You are hiring us to create a creative narrative film that represents your wedding day after all. Our choice in music plays an integral role in your film, it allows us to set a particular pace and mood for your film.'
        },
        {
            title: 'WE WOULD LIKE TO USE YOUR SERVICES BUT THE PRICE SEEMS EXPENSIVE, WHY?',
            answer: 'That question pretty needs its own article, but keep in mind the hours and cost involved with Administration, enquiries, marketing, gear (cameras, tripods ,audio recording equipment, lighting and a bunch of special tools to help us get some epic shots), gear maintenance, transport, meeting with clients, organising schedules, preparation (charging battries, cleaning lenses, clearing cards) filming, editing( downloading footage, watching through, cutting down, choosing music, story telling, color grading, touching up, exporting, uploading) keep in mind that typically 30-40 hours will go into editing your wedding film! Wedding videography is a huge detailes and time consuming process. If we didnt charge what we did the product will suffer.'
        },
        {
            title: 'CAN WE MEET BEFORE HAND TO DISCUSS DETAILS?',
            answer: 'We would absolutely love to meet all of our couples before their big day, but we know this isn’t always possible. So we usually recommend a phone or Skype call. We want to make sure we answer any questions you are curious about, that you are fully confident in our ability to make your wedding film and photos as special as they can be and more importantly, so we can find out a little bit about yourselves. We don’t want to be a stranger to you, we want to assure you are as comfortable as can be around us, after all, we will be a part of your special day!'
        },
        {
            title: 'WHY ARE YOUR WEDDING FILM SHORT IN LENGHT WHEN YOU WILL BE IN OUR WEDDING FOR 10 HOURS?',
            answer: 'Our main goal as wedding cinematographers is to make you a wedding film that everyone can watch and find engaging and entertaining. The days of the long-form wedding videography that last 2-3 hours are over. Very, very few people want to sit down and watch something that drags out for that long. Young stylish new couples want their wedding film to share similarities and conventions that are commonly seen in movies. We primarily shoot for your highlight wedding film’, as well as including your full ceremony, speeches, first dance.'
        },
        {
            title: 'DO YOU USE CONTRACTS?',
            answer: 'Yes. It is standard practice for professional wedding videography companies to ask clients to sign contracts. This is to protect both parties and clarify exactly what is expected from the clients and what Hawthorn will provide. The contract allows us to be well prepared so that every wedding film is produced smoothly and professionally as possible. Feel free to contact us and we’ll send you a copy of our terms and conditions.'
        },
    ];
    const testimonials = [
        {
            name: 'Salaha Sani',
            description: 'Hawthorn Studios is a top-notch media company specializing in videography and photography services. From the moment I stepped into their studio, I knew I was in the hands of professionals. The team was friendly, welcoming, and incredibly talented.'
        },
        {
            name: 'Agbo Evelyn-oka',
            description: 'Their videography and photography skills are unparalleled. They use state-of-the-art equipment and cutting-edge techniques to create stunning visuals that truly capture the essence of the moment. Whether it\'s a wedding, a corporate event, or a personal photoshoot, they have a keen eye for detail and an exceptional ability to capture the perfect shot.'
        },
        {
            name: 'Samuel Ajayi',
            description: 'Their editing skills are equally impressive. They know just how to enhance the footage and photos to create a cohesive and captivating final product. Their attention to detail is evident in every aspect of their work, from the color grading to the sound design.'
        },
        {
            name: 'Eze Jude',
            description: 'I was blown away by their creativity and professionalism throughout the entire process. They truly went above and beyond to ensure that I was happy with the end result. They are passionate about their work and it shows in every aspect of their service.'
        },
        {
            name: 'Leah Obadiah',
            description: 'Overall, I would highly recommend Hawthorn Studios to anyone looking for high-quality videography and photography services. They are truly the best in the business, and I am grateful for the exceptional work they did for me.'
        },
    ]
    return (
        <>
            <Navbar />
            <main className="home">
                <section className="hero">
                    <p>
                        Creating Timeless Moments. Capturing <span> Luxury </span> in Every Frame.
                    </p>
                    <Link to='/register'>
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
                            breakpoints={{
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 3,
                                },
                            }}
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
                            <source media="(min-width: 768px)" srcSet={Services1} />
                            <img src={Services} alt="" />
                        </picture>
                        <div>
                            <ul id="our_services">
                                <li>Cinematography</li>
                                <li>Photography</li>
                                <li>Studio sessions</li>
                                <li>Videography</li>
                                <li>Corporate events etc.</li>
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
                <section className="faqs">
                    <div className="head">Frequently Asked Questions</div>
                    <FAQ questions={questions} />
                </section>
                <section className="testimonial">
                    <h2>Testimonials</h2>
                    <div className="testimonials">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={45}
                            slidesPerView={1.15}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {
                                testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <p className="testimonial-description">{testimonial.description}</p>
                                        <h3 className="testimonial-name">{testimonial.name}</h3>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
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