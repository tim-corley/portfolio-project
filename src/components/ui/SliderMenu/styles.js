import styled from 'styled-components';
import tw from 'tailwind.macro';

export const SliderMenu = styled.div`
  ${tw`flex m-auto w-full`};
`;

export const Item = styled.h4`
  ${tw`text-xs text-pink-500 w-full text-center`};
`;

export const Separator = styled.h2`
  ${tw`relative w-2 h-8 mb-6 -mt-2`};
  ${({ center }) => center && tw`mx-auto`};

  &:before {
    content: '';
    ${tw`bg-indigo-900 h-full w-px absolute left-0`};
  }
`;
