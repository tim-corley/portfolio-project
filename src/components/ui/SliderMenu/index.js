import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const SliderMenu = ({ tech }) => {
  const data = tech[0];
  const techItems = Object.entries(data).map(([key, value]) => (
    <>
      <Styled.Key>{key}:</Styled.Key>
      <Styled.Val>{value}</Styled.Val>
    </>
  ));
  return <Styled.SliderMenu>{techItems}</Styled.SliderMenu>;
};

SliderMenu.propTypes = {
  tech: PropTypes.array
};

export default SliderMenu;
