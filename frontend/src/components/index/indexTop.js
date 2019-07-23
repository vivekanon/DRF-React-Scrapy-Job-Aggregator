import React, { useContext, useEffect } from "react";
import { FetchContext } from "../../store/fetch";
import { Container } from "../shared/container";
import axios from "axios";
import { useFetch } from '../hooks/useFetch'

export default function IndexTop() {
  const { data } = useContext(FetchContext);
  useFetch("http://127.0.0.1:8000/jobs/")
  
  return (
    <Container>
      <div className="pt-24 pb-12 flex flex-col flex-wrap justify-center items-center">
        <h1 className="text-indigo-600 text-4xl ">ACME CO.</h1>
        <p className="text-indigo-600 font-semibold pt-4 leading-loose tracking-wide">
          Dev Jobs. All Sources. One Site.
        </p>
        {console.log(data)}
      </div>
    </Container>
  );
}
