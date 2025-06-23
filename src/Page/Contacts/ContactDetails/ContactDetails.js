import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEnvelopeOpenText, faLocationPin, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

const ContactDetail = () => {
    return (
        <div id='contact-detail' className='p-5'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="card bordered">
                            <div className="p-5 text-center">
                            <FontAwesomeIcon icon={faEnvelopeOpenText} />
                            <h3>Email Address</h3>
                            <p>support@spring-knitwearbd.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div className="card bordered">
                            <div className="p-5 text-center">
                            <FontAwesomeIcon icon={faPhoneFlip} />
                            <h3>Phone Number</h3>
                            <p>+880 1755-697330</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div className="card bordered">
                            <div className="p-5 text-center">
                            <FontAwesomeIcon icon={faLocationPin} />
                            <h3>Office Address</h3>
                            <p><b>Head Office:</b> H#36, R#09, S#09, Uttara, Dhaka</p>
                            <p><b>Factory:</b> 11/C/6 Moynartek, Uttarkhan, Dhaka-1230</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;