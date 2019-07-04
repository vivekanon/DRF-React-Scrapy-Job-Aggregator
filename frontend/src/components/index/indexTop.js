import React from "react";
import { Container } from '../shared/container'

export default function IndexTop() {
  return (
    <Container>
      <div className="pt-24 pb-12 flex flex-col flex-wrap justify-center items-center">
        <h1 className="text-blue-800 text-4xl ">ACME CO.</h1>
        <p className="text-blue-800 font-semibold pt-4 leading-loose tracking-wide">
          Dev Jobs. All Sources. One Site.
        </p>
      </div>
    </Container>
  );
}
