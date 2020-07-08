import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const SliderMenu = ({ data }) => (
  <Styled.SliderMenu>
    {data.language ? <Styled.Item>{data.language}</Styled.Item> : null}
    {data.framework ? <Styled.Item>{data.framework}</Styled.Item> : null}
    {data.styling ? <Styled.Item>{data.styling}</Styled.Item> : null}
    {data.hosting ? <Styled.Item>{data.hosting}</Styled.Item> : null}
  </Styled.SliderMenu>
);

SliderMenu.propTypes = {
  language: PropTypes.string,
  framework: PropTypes.string,
  styling: PropTypes.string,
  hosting: PropTypes.string
};

export default SliderMenu;
