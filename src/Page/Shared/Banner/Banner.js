import React from 'react';
import './Banner.css';
import Navbar from '../Navbar';

const Banner = ({ title }) => {
    return (
        <div id='banner'>
            <div className="overly">
            <Navbar/>
                <div className="content">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;