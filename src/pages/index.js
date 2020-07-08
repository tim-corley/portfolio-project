import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroBanner />
      <Services />
      <hr />
      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
