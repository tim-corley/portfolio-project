import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
  ${tw`border-t border-gray-200 py-4`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
  }
`;

export const Link = styled.a`
  ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
`;

export const SocialItem = styled.div`
  ${tw`flex mx-4`};
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-12 h-12 border border-pink-500 rounded-full mb-2 text-2xl`};
`;
