import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { graphql, useStaticQuery } from 'gatsby';

const ContactPage = () => {
  const myStarredRepos = useStaticQuery(graphql`
    query {
      allGithubStarredrepositories {
        edges {
          node {
            id
            name
            url
            homepageUrl
            createdAt
          }
        }
      }
    }
  `);
  console.log(myStarredRepos);
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Project Page</h1>
    </Layout>
  );
};

export default ContactPage;
