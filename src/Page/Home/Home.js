import React from 'react'
import Headers from './Headers/Headers';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Brands from './Brands/Brands';
import Certificate from './Certificate/Certificate';
import SK_ABOUT from './About_of_SK/SkAbout';

function Home() {
  return (
    <div>
        <Headers />
        <SK_ABOUT />
        <WhyChooseUs />
        <Brands />
        <Certificate />
        {/* <Footer /> */}
    </div>
  )
}

export default Home