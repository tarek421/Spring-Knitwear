import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import ContactDetail from '../ContactDetails/ContactDetails';
import './Contacts.css';
import ContactForm from '../ContactForm/ContactForm';
import Map from '../Map/Map';

const Contacts = () => {
  return (
    <div>
      <Banner title="Contact Us" />
      <ContactDetail />
      <ContactForm />
      <Map />
    </div>
  );
};

export default Contacts;