import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/ui/Icon';
import Collapsible from 'react-collapsible';
import * as Styled from './styles';
import './collapsible-styles.css';

const SliderMenu = ({ tech }) => {
  const right = 'angle-double-right';
  const left = 'angle-double-left';
  const rightIcon = <Icon icon={right} />;
  const leftIcon = <Icon icon={left} />;
  const data = tech[0];
  const techItems = Object.entries(data).map(([key, value]) => {
    if (value) {
      return (
        <>
          {/* <Styled.Key>{key}:</Styled.Key> */}
          <Styled.Val>{value}</Styled.Val>
        </>
      );
    } else {
      return null;
    }
  });
  return (
    <Styled.Wrapper>
      <Collapsible
        trigger={rightIcon}
        triggerWhenOpen={leftIcon}
        easing={'ease-in'}
        triggerClassName="CustomTriggerCSS"
        triggerOpenedClassName="CustomTriggerCSS--open"
        contentOuterClassName="CustomOuterContentCSS"
        contentInnerClassName="CustomInnerContentCSS"
      >
        <Styled.SliderMenu>{techItems}</Styled.SliderMenu>
      </Collapsible>
    </Styled.Wrapper>
  );
};

SliderMenu.propTypes = {
  tech: PropTypes.array
};

export default SliderMenu;
