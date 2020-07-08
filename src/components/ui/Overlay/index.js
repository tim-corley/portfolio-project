import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/ui/Icon';
import { Popover, Pane, Text, Button, Position, defaultTheme, ThemeProvider, useTheme } from 'evergreen-ui';
import * as Styled from './styles';

const Overlay = ({ tech }) => {
  const theme = {
    ...defaultTheme,
    myNewButtonStyles: {
      color: 'white',
      backgroundColor: 'hotpink',
      height: 30,
      borderRadius: '5px'
    }
  };

  const ThemedComponent = ({ children }) => <ThemeProvider value={theme}>{children}</ThemeProvider>;

  const MyNewThemedButton = () => {
    const theme = useTheme();
    return <button style={theme.myNewButtonStyles}>TEST BUTTON</button>;
  };

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
    <ThemedComponent>
      <Styled.Wrapper>
        {/* <MyNewThemedButton /> */}
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
    </ThemedComponent>
  );
};

Overlay.propTypes = {
  tech: PropTypes.array
};

export default Overlay;
