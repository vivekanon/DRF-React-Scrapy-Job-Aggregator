import styled from "styled-components";
import tw from "tailwind.macro";

export const Container = styled("div")`
  ${tw`relative flex flex-col w-full pt-1 pb-1 justify-center items-center bg-gray-100 lg:mx-auto`};
`;
export const SubContainer = styled("div")`
  ${tw`flex w-11/12 justify-center mx-auto pt-1 pb-1 bg-gray-100 lg:mx-auto`};
  ${props => props.col && tw`flex-col`};
  ${props => props.white && tw`bg-white`};
`;