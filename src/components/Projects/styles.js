import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Projects = styled.div`
  ${tw`max-w-screen-sm mx-auto w-full px-0 sm:px-16 mb-4`};
`;

export const Project = styled.div`
  ${tw`flex flex-col items-center text-center mt-4`};
`;

export const Image = styled.figure`
  ${tw`w-16 h-16 mx-auto border border-pink-500 rounded-full`};

  img {
    ${tw`border-4 border-white rounded-full`};
  }
`;

export const Title = styled.h3`
  ${tw`font-semibold my-4`};
`;

export const Separator = styled.h2`
  ${tw`relative w-2 h-8 mb-6 mt-8`};
  ${({ center }) => center && tw`mx-auto`};

  &:before {
    content: '';
    ${tw`bg-indigo-900 h-full w-px absolute left-0`};
  }

  &:after {
    content: '';
    ${tw`bg-pink-500 h-6 w-px absolute ml-1`};
  }
`;
