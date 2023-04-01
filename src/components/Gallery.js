import Footer from "./Footer";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/images/gallery/img1.jpg";
import img2 from "../assets/images/gallery/img2.jpg";
import img3 from "../assets/images/gallery/img3.jpg";
import img4 from "../assets/images/gallery/img4.jpg";
import img5 from "../assets/images/gallery/img5.jpg";
import img6 from "../assets/images/gallery/img6.jpg";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <div className="main_gallery">
            <Navbar />
            <header>
                <h1>Our Gallery</h1>
            </header>
            <main>
                <Swiper
                    navigation={true}
                    pagination={pagination}
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
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
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="" />
                    </SwiperSlide>
                </Swiper>
                <Link to='https://www.youtube.com/c/HawthornMedia01' target='_blank' className="button">Watch Our Videos</Link>
            </main>
            <Footer />
        </div>
    );
}

export default Gallery;