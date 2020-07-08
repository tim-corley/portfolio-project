import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { graphql, useStaticQuery } from 'gatsby';

const ContactPage = () => {
  const myRepos = useStaticQuery(graphql`
    query {
      githubRepositoryowner {
        id
        login
        repositories {
          edges {
            node {
              id
              name
              createdAt
            }
          }
        }
      }
    }
  `);
  console.log(myRepos);
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Project Page</h1>
    </Layout>
  );
};

export default ContactPage;
