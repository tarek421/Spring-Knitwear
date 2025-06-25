import React from 'react';

const ContactForm = () => {
    return (
        <div id="contact-form" className="my-5 py-5">
            <div className='overly'>
                <div className="container">
                    <div className="px-5 bordered">
                        <form action="">
                            <h3>Get A Quote</h3>
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <input type="text" name="name" placeholder="Enter your Name" />
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <input type="email" name="email" placeholder="Enter your Email" />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <textarea placeholder="Enter your Message" name="Message" rows="10"></textarea>
                            </div>

                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;