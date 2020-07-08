import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ContactInfo from 'components/ContactInfo';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactInfo />
    </Layout>
  );
};

export default ContactPage;
