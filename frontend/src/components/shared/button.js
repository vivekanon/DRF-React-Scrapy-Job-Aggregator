import styled from "styled-components";
import tw from "tailwind.macro";
import {Link} from 'gatsby'

export const ButtonPrimary = styled("button")`
  ${tw`lg:px-6 lg:py-3 py-2 px-3 bg-green-400 font-semibold text-white rounded shadow-md text-xs hover:bg-green-600`};
`;
export const Button = styled("button")`
  ${tw`lg:px-6 lg:py-3 py-2 px-3 font-semibold text-blue-800 text-xs`};
`;