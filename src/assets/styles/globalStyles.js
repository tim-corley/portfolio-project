import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-gray-900 bg-white`};
  }

  a {
    ${tw`text-gray-600 hover:text-gray-700`};
  }

  p + p {
    ${tw`mt-3`};
  }
`;
