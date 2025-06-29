import React from 'react';
import './Banner.css';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom'; // যদি React Router ব্যবহার করো

const Banner = ({ title }) => {
    return (
        <div id='banner'>
            <div className="overly">
                <Navbar />
                <div className='container'>
                    <div className="content">
                        <h2>{title}</h2>
                        <nav className="breadcrumb">
                            <Link to="/">Home</Link>
                            <span className="separator">→</span>
                            <span className="current">{title}</span>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
