import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';
import Button from 'components/ui/Button';
import Overlay from 'components/ui/Popover';
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
              repo
              demo
              tech {
                language
                framework
                styling
                hosting
              }
              cover {
                childImageSharp {
                  fluid {
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
              frontmatter: { cover, title, tech, repo, demo }
            } = item.node;

            return (
              <Styled.Project key={id}>
                <Overlay tech={tech}></Overlay>
                <Styled.Image>
                  <Img fluid={cover.childImageSharp.fluid} alt={title} />
                </Styled.Image>
                <Styled.Title>{title}</Styled.Title>
                <FormatHtml content={html} />
                <Styled.Link>
                  <a href={repo} target="_blank" rel="noopener noreferrer" key={id}>
                    <Styled.Text>
                      <span>REPO</span>
                    </Styled.Text>
                  </a>
                </Styled.Link>
                <Styled.Link>
                  <a href={demo} target="_blank" rel="noopener noreferrer" key={id}>
                    <Styled.Text>
                      <span>DEMO</span>
                    </Styled.Text>
                  </a>
                </Styled.Link>
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
