import React from "react";
import { SubContainer } from "../shared/container";
import { useHookFetch } from '../hooks/fetch'

export default function IndexTop() {
  if (typeof window === 'undefined') {
    return null
  } else if ( window.location.pathname === "/") {
    useHookFetch("http://127.0.0.1:8000/jobs/")
  }
  
  return (
    <SubContainer>
      <div className="pt-24 pb-12 flex flex-col flex-wrap justify-center items-center">
        <h1 className="text-indigo-600 text-4xl ">ACME CO.</h1>
        <p className="text-indigo-600 font-semibold pt-4 leading-loose tracking-wide">
          Dev Jobs. All Sources. One Site.
        </p>
      </div>
    </SubContainer>
  );
}
