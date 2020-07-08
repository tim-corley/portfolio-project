import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Image, Reveal } from 'semantic-ui-react';
import * as Styled from './styles';

const RevealExampleMoveRight = ({ top, bottom }) => (
  <Styled.Block>
    <Reveal animated="move right">
      <Reveal.Content visible>
        {top}
        {/* <Image src={top} fluid /> */}
      </Reveal.Content>
      <Reveal.Content hidden>
        {bottom}
        {/* <Image src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg" size="fluid" /> */}
      </Reveal.Content>
    </Reveal>
  </Styled.Block>
);

export default RevealExampleMoveRight;
