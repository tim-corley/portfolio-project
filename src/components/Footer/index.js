import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from 'components/ui/Icon';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Footer = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "social section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "social" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              icon
              url
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const links = allMarkdownRemark.edges;

  return (
    <Styled.Footer>
      <Container>
        <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
        <Styled.Links>
          {links.map((item) => {
            const {
              id,
              frontmatter: { icon, url }
            } = item.node;

            return (
              <a href={url} target="_blank" rel="noopener noreferrer" key={id}>
                <Styled.SocialItem>
                  <Styled.Icon>
                    <Icon icon={icon} />
                  </Styled.Icon>
                </Styled.SocialItem>
              </a>
            );
          })}
        </Styled.Links>
      </Container>
    </Styled.Footer>
  );
};

export default Footer;
