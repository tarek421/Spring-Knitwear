import React from 'react';
import './SkAbout.css';
import { motion } from 'framer-motion';
import SK_Factory from '../../../image/Factory_Building.jpg';

function SK_About() {
    return (
        <section id='About' className='py-5'>
            <div className="container mx-auto">
                <div className='row'>
                    <div className='col-md-8 py-5'>
                        <div className='background'>
                            <div className='content'>
                                <motion.div
                                    className="text-center pb-5"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <h1 className="title">The story of Spring Knitwear</h1>
                                </motion.div>

                                <motion.div
                                    className="about-description"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <p>Spring Knitwear, established in 2012 with a single factory, has evolved into a globally recognized name in the sweater industry. Today, the company operates both as a buying house and a factory, catering to major retailers in the UK, Australia, and Germany. With an annual production capacity of over 180 million sweaters, Spring Knitwear specializes in crafting high-quality garments for men, women, boys, and girls. Guided by its core values—Quality, Price, and Delivery—the company continues to excel in meeting global standards.</p>

                                    <p className="my-5">We ensure timely delivery of the products you need at the price you want. Spring Knitwear takes pride in its proven track record of collaborating with renowned brands such as U.S. Polo Assn., Duchamp, Penfield, Jack Wills, Peckham Rye, Gant and many more.</p>

                                    <ul className='mt-5'>
                                        <li>Year of establishment: January 2012</li>
                                        <li>Estimated turnover for year 2025: 15.00 Million U.S Dollars</li>
                                        <li>Production capacity: 50,000 Pcs/Day</li>
                                    </ul>

                                    <div className="mt-5">
                                        <a href="#contact" className="cta-button">Get in Touch</a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 col-12 factory_building'>
                        <img
                            src={SK_Factory}
                            alt="Spring Knitwear Factory"
                            className="img-fluid rounded d-block d-md-none mt-4"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SK_About;
