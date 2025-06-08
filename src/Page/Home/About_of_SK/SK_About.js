import React from 'react';
import './SK_About.css';
import SK_Factory from '../../../image/Factory_Building.jpg';

function SK_About() {
    return (
        <section id='About' className='pt-5'>
            <div className="container mx-auto px-4 pt-5">
                <div className='row'>
                    <div className='col-md-8 animate-slide-in'>
                        <div className="text-center pb-5">
                            <h1 className="title">The story of Spring Knitwear</h1>
                        </div>
                        <div className="about-description">
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

export default SK_About