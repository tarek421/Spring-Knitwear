// Certificate.jsx
import React, { useEffect } from 'react';
import './Certificate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from './certificatesData'; // Keep images separate for cleanliness

export default function Certificate() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="Certificate" aria-labelledby="cert-heading">
      <div className="container text-center">
        <h2 className="cert-title" id="cert-heading">CERTIFICATES & RECOGNITION</h2>
        <div className="slider-container" data-aos="fade-up">
          <div className="slider-track">
            {[...images, ...images].map((img, index) => (
              <div className="slider-card" key={index}>
                <img
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  loading="lazy"
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
