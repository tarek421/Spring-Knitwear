import React from 'react'
import './Brands.css';
import { brands } from './data';

export default function Brands() {
    return (
        <div id='Brands'>
            <h2>BRANDS WE WORK WITH</h2>
            <p className="subtitle">We proudly collaborate with some of the world's most recognizable fashion retailers.</p>

            <div className="logo-grid">

                {brands.map((brand, index) => (
                    <div key={index} className='logo-box'>
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            style={{ Height: 'auto', maxWidth: '100%' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
