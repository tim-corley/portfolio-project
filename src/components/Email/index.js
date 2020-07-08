import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Email = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "email section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          messagePlaceholder
          submitPlaceholder
        }
      }
    }
  `);

  const email = markdownRemark.frontmatter;

  return (
    <Styled.Email>
      <Container section>
        <TitleSection title={email.title} subtitle={email.subtitle} center />
        <Styled.Form form action="https://getform.io/f/1595fbdc-b298-42c6-a060-0543842ca415" method="POST">
          <Styled.Input type="text" name="name" placeholder={email.namePlaceholder} />
          <Styled.Input type="email" name="email" placeholder={email.emailPlaceholder} />
          <Styled.TextArea type="textarea" name="message" placeholder={email.messagePlaceholder} />
          <Button primary type="submit">
            {email.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.Email>
  );
};

export default Email;
