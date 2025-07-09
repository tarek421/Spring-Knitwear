


import React from 'react';

const Map = () => {
  return (
    <div id='map' style={{ padding: '0 5rem' }}>
      <div style={{ marginTop: '1rem' }}>
        <iframe 
        title="Google Map - Spring Knitwear Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.238490298992!2d90.4474866745673!3d23.881160383745268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5005078d919%3A0x634874c2d618ac96!2sSpring%20BD%20Knitwear%20Ltd!5e0!3m2!1sen!2sbd!4v1750672803288!5m2!1sen!2sbd" 
        width="100%" 
        height="450" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};

export default Map;
