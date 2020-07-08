import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { graphql, useStaticQuery } from 'gatsby';
import * as Styled from '../components/Services/styles';

const ContactPage = () => {
  const projectData = useStaticQuery(graphql`
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
      markdownRemark(frontmatter: { category: { eq: "projects section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
    }
  `);

  const headerContent = projectData.markdownRemark.frontmatter;
  const repoData = projectData.allGithubStarredrepositories.edges;

  return (
    <Layout>
      <SEO title="Projects" />
      <Container section>
        <TitleSection title={headerContent.title} subtitle={headerContent.subtitle} center />
        <Styled.Services>
          {repoData.map((repo) => {
            const { id, name, url, hompageUrl } = repo.node;

            return (
              <Styled.ServiceItem key={id}>
                <InfoBlock title={name} content={url} />
              </Styled.ServiceItem>
            );
          })}
        </Styled.Services>
      </Container>
    </Layout>
  );
};

export default ContactPage;
