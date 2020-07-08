import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const SliderMenu = ({ tech }) => {
  console.log(tech);
  const data = tech[0];
  const techItems = Object.entries(data).map(([key, value]) => <Styled.Item>{value}</Styled.Item>);
  return <Styled.SliderMenu>{techItems}</Styled.SliderMenu>;
};

SliderMenu.propTypes = {
  tech: PropTypes.array
};

export default SliderMenu;
