import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Key = styled.span`
  ${tw`font-bold text-xs text-pink-500 text-center`};
`;

export const Val = styled.span`
  ${tw`inline-block text-xs border border-gray-400 rounded-full px-3 py-1 text-pink-500 text-center mx-1`};
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-12 h-12 mb-2 text-gray-400`};
`;

export const Wrapper = styled.div`
  ${tw`flex justify-start px-1`};
`;

export const Button = styled.div`
  ${tw`text-gray-400 outline-none`};
`;
