import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/ui/Icon';
import { Popover, Pane, Text, Button, Position } from 'evergreen-ui';
import * as Styled from './styles';

const Overlay = ({ tech }) => {
  const right = 'angle-double-right';
  const left = 'angle-double-left';
  const rightIcon = <Icon icon={right} />;
  const leftIcon = <Icon icon={left} />;
  const data = tech[0];
  const techItems = Object.entries(data).map(([key, value]) => {
    if (value) {
      return (
        <Styled.List key={key}>
          <ul>
            <li>
              {key}: {value}
            </li>
          </ul>
        </Styled.List>
      );
    } else {
      return null;
    }
  });
  return (
    <Styled.Wrapper>
      <Popover
        content={
          <Pane
            minWidth={200}
            minHeight={60}
            display="flex"
            alignItems="left"
            justifyContent="left"
            flexDirection="column"
          >
            <Text>{techItems}</Text>
          </Pane>
        }
        position={Position.BOTTOM_LEFT}
      >
        <Button appearance="minimal">{rightIcon}</Button>
      </Popover>
    </Styled.Wrapper>
  );
};

Overlay.propTypes = {
  tech: PropTypes.array
};

export default Overlay;
