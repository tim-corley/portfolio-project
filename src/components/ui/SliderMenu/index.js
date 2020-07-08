import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const SliderMenu = ({ language, framework, styling, hosting }) => (
  <Styled.SliderMenu>
    {language ? <Styled.Item>{language}</Styled.Item> : null}
    {framework ? <Styled.Item>{framework}</Styled.Item> : null}
    {styling ? <Styled.Item>{styling}</Styled.Item> : null}
    {hosting ? <Styled.Item>{hosting}</Styled.Item> : null}
  </Styled.SliderMenu>
);

SliderMenu.propTypes = {
  language: PropTypes.string,
  framework: PropTypes.string,
  styling: PropTypes.string,
  hosting: PropTypes.string
};

export default SliderMenu;
