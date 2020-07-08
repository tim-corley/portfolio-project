import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const SliderMenu = ({ language, framework, styling, hosting }) => (
  <Styled.SliderMenu>
    <Styled.Item>{language}</Styled.Item>
    <Styled.Separator />
    <Styled.Item>{framework}</Styled.Item>
    <Styled.Separator />
    <Styled.Item>{styling}</Styled.Item>
    <Styled.Separator />
    <Styled.Item>{hosting}</Styled.Item>
  </Styled.SliderMenu>
);

SliderMenu.propTypes = {
  language: PropTypes.string,
  framework: PropTypes.string,
  styling: PropTypes.string,
  hosting: PropTypes.string
};

export default SliderMenu;
