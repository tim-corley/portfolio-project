import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Key = styled.span`
  ${tw`font-bold text-xs text-pink-500 text-center`};
`;

export const Val = styled.span`
  ${tw`inline-block text-xs border border-gray-400 rounded-full px-3 py-1 text-pink-500 text-center mx-1`};
`;

export const List = styled.div`
  ${tw`list-inside font-bold text-xs text-pink-500 m-6`}
`;

export const Wrapper = styled.div`
  ${tw`flex justify-start px-1`};
`;
