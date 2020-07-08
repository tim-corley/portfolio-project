import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Projects = styled.div`
  ${tw`max-w-screen-sm mx-auto w-full px-0 sm:px-16 mt-4 mb-4 rounded-lg border border-gray-300 shadow-md`};
`;

export const Project = styled.div`
  ${tw`flex flex-col items-center text-center mt-4 outline-none`};
`;

export const Image = styled.div`
  ${tw`w-full mx-auto`};

  img {
    ${tw`border-1 border-gray-300`};
  }
`;

export const Title = styled.h3`
  ${tw`font-semibold`};
`;

export const Link = styled.h3`
  ${tw`inline-block px-10 m-4 rounded-full border border-teal-500`};
`;

export const Text = styled.div`
  ${tw`text-teal-500`};
`;

export const Separator = styled.h2`
  ${tw`relative w-2 h-8 mb-6 mt-10`};
  ${({ center }) => center && tw`mx-auto`};

  &:before {
    content: '';
    ${tw`bg-gray-900 h-full w-px absolute left-0`};
  }

  &:after {
    content: '';
    ${tw`bg-teal-500 h-6 w-px absolute ml-1`};
  }
`;

export const Top = styled.p`
  ${tw`flex items-center justify-center text-sm text-teal-500 p-2`};
`;
