/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import ContactPage from 'views/ContactPage';
import Main from 'layouts/Main';

const ContactViewPage = () => {
  return (
    <div className="container">
      <Main>
        <ContactPage />
      </Main>
    </div>
  )
};

export default ContactViewPage;
