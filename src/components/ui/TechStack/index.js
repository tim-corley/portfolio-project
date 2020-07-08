import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/ui/Icon';
import Timeline from 'components/ui/Timeline';
import * as Styled from './styles';

const TechItem = ({ component, content }) => {
  return (
    <Styled.Timeline>
      <Styled.Point />
      <Styled.Details>
        <Styled.Date>{component}</Styled.Date>
        <Styled.Title>{content}</Styled.Title>
      </Styled.Details>
    </Styled.Timeline>
  );
};

const TechStack = ({ tech }) => {
  const data = tech[0];
  const techItems = Object.entries(data).map(([key, value]) => {
    if (value) {
      return <TechItem component={key} content={value}></TechItem>;
    } else {
      return null;
    }
  });
  return (
    <>
      <div>{techItems}</div>
    </>
  );
};

TechStack.propTypes = {
  tech: PropTypes.array
};

export default TechStack;
