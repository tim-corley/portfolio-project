import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';
import Button from 'components/ui/Button';
import * as Styled from './styles';

const Carousel = Loadable(() => import('components/ui/Carousel'));

const Projects = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "projects section" } }) {
        frontmatter {
          title
          subtitle
          linkTo
          linkText
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "projects" } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const projectData = markdownRemark.frontmatter;
  const projects = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={projectData.title} subtitle={projectData.subtitle} center />
      <Styled.Projects>
        <Carousel>
          {projects.map((item) => {
            const {
              id,
              html,
              frontmatter: { cover, title }
            } = item.node;

            return (
              <Styled.Project key={id}>
                <Styled.Image>
                  <Img fluid={cover.childImageSharp.fluid} alt={title} />
                </Styled.Image>
                <Styled.Title>{title}</Styled.Title>
                <FormatHtml content={html} />
              </Styled.Project>
            );
          })}
        </Carousel>
      </Styled.Projects>
      <Link to={projectData.linkTo}>
        <Styled.Separator />
        <Button primary>{projectData.linkText}</Button>
      </Link>
    </Container>
  );
};

export default Projects;