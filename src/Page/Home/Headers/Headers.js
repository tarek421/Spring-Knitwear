import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./Headers.css";
import { Autoplay, Pagination } from "swiper/modules";

const Headers = () => {
  return (
    <div id="slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider zoom-image">
            <div className="overlay">
              <div className="content">
                <h1>Comprehensive Solutions for <span>Apparel Production and Sourcing</span></h1>
                <h5>At Spring Knitwear, we offer a wide range of services, from design and development to production and quality assurance. Whether you need customized knitwear or reliable sourcing solutions, our expert team ensures excellence at every step of the process. Let's bring your vision to life.</h5>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="slider2 zoom-image">
              <div className="overlay">
                <div className="content">
                  <h1>Crafting Excellence <span>in Knitwear and Apparel Solutions</span></h1>
                  <h5>Welcome to Spring Knitwear, where quality meets innovation. As a trusted sweater manufacturer and buying house, we specialize in delivering premium knitwear and apparel tailored to global standards. Partner with us for unmatched craftsmanship, timely delivery, and customer satisfaction.</h5>
                </div>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="slider3 zoom-image">
              <div className="overlay">
                <div className="content">
                  <h1>Your Trusted Partner in <span>Fashion Manufacturing</span></h1>
                  <h5>With years of experience in the garment industry, Spring Knitwear is dedicated to producing high-quality sweaters and apparel for global markets. Our commitment to ethical practices, sustainable solutions, and cutting-edge technology sets us apart as a leader in knitwear manufacturing and sourcing.</h5>
                </div>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Headers;
