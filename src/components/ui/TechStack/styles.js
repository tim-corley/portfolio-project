import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Wrapper = styled.div`
  ${tw`overflow-auto h-64 my-4`};
`;

export const Timeline = styled.div`
  ${tw`flex-1 sm:flex-row w-full p-4 relative border-l border-gray-200 mx-6`};

  &:last-child {
    ${tw`pb-0`};
  }
`;

export const Details = styled.div`
  ${tw`w-full sm:w-1/3`};
`;

export const Title = styled.div`
  ${tw`font-semibold mt-3`};
`;

export const Subtitle = styled.div`
  ${tw`text-xs`};
`;

export const Date = styled.div`
  ${tw`text-xs border border-teal-500 rounded-full px-2`};
  width: fit-content;
`;

export const Point = styled.span`
  ${tw`w-3 h-3 border border-gray-200 bg-gray-100 rounded-full absolute`};
  left: -6px;
  top: 20px;
`;
