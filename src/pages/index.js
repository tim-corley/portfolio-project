import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Projects from 'components/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroBanner />
      <Services />
      <hr />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
