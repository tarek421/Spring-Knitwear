import React, { useEffect } from 'react';
import './WhyChooseUs.css';
import { FaMedal, FaDollarSign, FaGlobeEurope, FaLeaf } from "react-icons/fa";
import { MdAccessTime } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

import safety1 from '../../../image/USG0437-002-MS_1.jpg';
import safety2 from '../../../image/USP2714-H03-MS_1.jpg';
import LazyLoad from 'react-lazyload';


const Safety = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div id="WhyChooseUs" className="py-sm-0 py-md-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <h6 className="section-sub-title" data-aos="fade-up">WHY CHOOSE US?</h6>
                        <h1 className="section-title" data-aos="fade-up" data-aos-delay="100">Quality Is Our First Priority</h1>
                        <p className="section-title-2" data-aos="fade-up" data-aos-delay="200">At Spring Knitwear Ltd, we believe quality speaks louder than words. Every sweater we produce undergoes strict quality checks to ensure premium standards for our global clients.</p>
                        <div className="mt-3 Fetures">
                            <div className="d-flex">
                                <div>
                                    <FaMedal style={{ fontSize: "3rem" }} />
                                </div>
                                <div className="ms-3">
                                    <h4>Experts in Sweater Manufacturing</h4>
                                    <p>With years of focused experience, we specialize in all types of sweaters – from basic to fashion-forward designs – for leading brands across the world.</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div style={{ margin: "auto" }}>
                                    <MdAccessTime style={{ fontSize: "3rem" }} className="text-indigo-600 mb-2" />
                                </div>
                                <div className="ms-3">
                                    <h4>Reliable On-Time Delivery</h4>
                                    <p>Our streamlined production and logistics processes ensure your shipments always arrive on schedule, meeting tight deadlines without compromising quality.</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div style={{ margin: "auto" }}>
                                    <FaDollarSign style={{ fontSize: "3rem" }} className="text-indigo-600 mb-2" />
                                </div>
                                <div className="ms-3">
                                    <h4>Competitive & Transparent Pricing</h4>
                                    <p>We offer industry-leading prices without hidden costs, helping our clients maintain healthy margins while receiving top-notch products.</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div style={{ margin: "auto" }}>
                                    <FaGlobeEurope style={{ fontSize: "3rem" }} className="text-indigo-600 mb-2" />
                                </div>

                                <div className="ms-3">
                                    <h4>Trusted Worldwide</h4>
                                    <p>Spring Knitwear Ltd proudly serves long-term partners across Europe, North America, and other key export markets – built on trust, commitment, and results.</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div style={{ margin: "auto" }}>
                                    <FaLeaf style={{ fontSize: "3rem" }} className="text-indigo-600 mb-2" />
                                </div>
                                <div className="ms-3">
                                    <h4>Sustainable & Ethical Practices</h4>
                                    <p>From sourcing to final shipment, we follow eco-conscious and ethical manufacturing practices to support a better future for all.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 px-5">
                        <div className="safety-img-wrap">
                            <div className="WhyChooseUs-img-1 image-card">
                                <LazyLoad height={300} offset={100}>
                                    <img src={safety2} alt="Image2" loading="lazy" />
                                </LazyLoad>
                            </div>
                            <div className="WhyChooseUs-img-2 image-card">
                                <LazyLoad height={300} offset={100}>
                                    <img src={safety1} alt="Image1" loading="lazy" />
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safety;