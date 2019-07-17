import styled from "styled-components";
import tw from "tailwind.macro";

export const ButtonPrimary = styled("button")`
  ${tw`lg:px-6 lg:py-3 py-2 px-3 bg-indigo-600 text-white rounded shadow-md hover:bg-indigo-800`};
`;
export const Button = styled("button")`
  ${tw`lg:px-6 lg:py-3 py-2 px-3`};
  ${props => props.border && tw`border border-indigo-600 rounded`};
`;