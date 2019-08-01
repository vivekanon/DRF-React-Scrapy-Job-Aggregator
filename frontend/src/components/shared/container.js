import styled from "styled-components";
import tw from "tailwind.macro";

export const Container = styled("div")`
  ${tw`relative flex w-11/12 pt-1 pb-1 justify-around items-center mx-auto`};
  ${props => props.col && tw`flex-col`};
  ${props => props.wrap && tw`flex-wrap`};
  ${props => props.gray && tw`bg-gray-100`};
`;
export const SubContainer = styled("div")`
  ${tw`relative flex w-11/12 justify-center mx-auto pt-1 pb-1 bg-gray-100 lg:mx-auto`};
  ${props => props.col && tw`flex-col`};
  ${props => props.white && tw`bg-white`};
`;