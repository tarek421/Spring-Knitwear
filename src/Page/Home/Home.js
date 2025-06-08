import React from 'react'
import Headers from './Headers/Headers';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Brands from './Brands/Brands';
import Certificate from './Certificate/Certificate';
import Sk_About from './About_of_SK/SK_About';

function Home() {
  return (
    <div>
        <Headers />
        <Sk_About />
        <WhyChooseUs />
        <Brands />
        <Certificate />
        {/* <Footer /> */}
    </div>
  )
}

export default Home