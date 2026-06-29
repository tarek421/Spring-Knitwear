import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MD_SIR from '../../../image/MD_SIR.jpg';
import Chireman from '../../../image/Chairman.jpg';

const MDMessage = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Column - Photo */}
        <div className="col-md-3 text-center">
          <img
            src={MD_SIR} // এখানে আপনার MD-এর photo path দিন
            alt="MD"
            className="img-fluid rounded-circle"
          />
        </div>

        {/* Right Column - Message */}
        <div className="col-md-9">
          <h3>Message from Managing Director</h3>
          <p>
            Since our journey began in 2012, our focus has always been on excellence—whether
            in quality, production, or our workplace environment. Over the years, our experienced
            management team and dedicated workforce have worked tirelessly to understand the
            needs of our clients and provide solutions that consistently exceed expectations.
          </p>
          <p>
            We take pride in our ability to adapt to the diverse requirements of customers,
            both in Bangladesh and abroad. At our core, we firmly believe that quality is the
            result of persistent effort, attention to detail, and a shared commitment from
            every member of our team.
          </p>
          <p>
            It is this dedication that has earned us the trust and recognition of our valued
            clients worldwide. As we continue to grow, our mission remains the same: to set
            new benchmarks in the apparel industry while upholding the highest standards
            of service and quality.
          </p>
          <p className="fw-bold">— Mahmudul Hasan</p>
        </div>
      </div>
      <br></br>
      <br />

      <div className="row align-items-center">

        {/* left Column - Message */}
        <div className="col-md-9 text-end">
          <h3>Message from our honorable Chairman</h3>
           <p>
            Achieving the highest quality standards and ensuring timely delivery have
            always been our prime objectives. To accomplish these goals, our experienced
            management team works hand-in-hand with a highly skilled, professional, and
            dedicated workforce.
          </p>
          <p>
            We maintain a flexible setup that allows us to adapt to the diverse needs of
            our customers. Our employees, whom we consider our greatest strength, enjoy a
            safe and healthy working environment. We firmly believe that quality is a top
            priority, achieved through persistent and dedicated efforts.
          </p>
          <p>
            We warmly welcome you to reach out with any inquiries about our company or
            products, and we look forward to serving you with the highest standards of
            excellence.
          </p>
          <p className="fw-bold">— Jesmin Akter</p>
        </div>
        {/* right Column - Photo */}
        <div className="col-md-3 text-center">
          <img
            src={Chireman} // এখানে আপনার MD-এর photo path দিন
            alt="MD"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default MDMessage;
