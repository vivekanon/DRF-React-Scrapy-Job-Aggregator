import styled from "styled-components";
import tw from "tailwind.macro";

export const HeaderPrimary = styled("h1")`
  ${tw`text-xl text-indigo-900 font-bold`};
`;

export const HeaderSub = styled("h2")`
  ${tw`text-lg text-indigo-900 font-semibold`}; 
`;

export const TextPrimary = styled("p")`
  ${tw`text-sm font-normal`};
  ${props => props.white && tw`text-white`};
  ${props => props.indigo && tw`text-indigo-600`};
  ${props => props.red && tw`text-red-600`};
  ${props => props.bold && tw`font-semibold`};
`;

export const TextSub = styled("p")`
  ${tw`text-xs font-thin`};
  ${props => props.primary && tw`lg:text-lg md:text-lg sm:text-sm`};
  ${props => props.white && tw`text-white`};
  ${props => props.indigo && tw`text-indigo-900`};
`;