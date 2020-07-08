import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Image, Reveal } from 'semantic-ui-react';
import * as Styled from './styles';

const RevealExampleMoveRight = ({ top, bottom }) => (
  <Reveal animated="move right">
    <Reveal.Content visible>{top}</Reveal.Content>
    <Reveal.Content hidden>{bottom}</Reveal.Content>
  </Reveal>
);

export default RevealExampleMoveRight;
