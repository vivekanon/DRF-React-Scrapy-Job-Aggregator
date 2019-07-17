import React, { useContext, useEffect } from "react";
import { FetchContext } from "../../store/fetch";
import { Container } from "../shared/container";
import axios from "axios";

export default function IndexTop() {
  const { setIsLoading, setJobs, values, setValue } = useContext(FetchContext);
  useEffect(() => {
    setIsLoading(true);

    async function initialFetch() {
      await axios
        .get("http://127.0.0.1:8000/jobs/")
        .then(response => setJobs({ jobs: response.data }))
        .catch(error => {
          console.log(error);
        });
    }
    initialFetch();
  }, []);
  return (
    <Container>
      <div className="pt-24 pb-12 flex flex-col flex-wrap justify-center items-center">
        <h1 className="text-indigo-600 text-4xl ">ACME CO.</h1>
        <p className="text-indigo-600 font-semibold pt-4 leading-loose tracking-wide">
          Dev Jobs. All Sources. One Site.
        </p>
      </div>
    </Container>
  );
}
