import React, { useState, useContext, useEffect } from "react";
import { FetchContext } from "../../store/fetch";
import { navigate, Link } from "gatsby";
import { ButtonPrimary } from "../shared/button";
import { Container } from "../shared/container";
import { Card } from "../shared/card";
import axios from "axios";

export function IndexForm() {
  const [isFocused, setIsFocused] = useState(false);
  const { setIsLoading, setJobs, values, setValue } = useContext(FetchContext);
  const focus = () => setIsFocused(true);
  const focusOut = () => setIsFocused(false);

  function handleChange(e) {
    setValue({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    const { search, location } = values;
    e.preventDefault();
    navigate("/jobs");
    await axios
      .get(`http://127.0.0.1:8000/?search=${search}`)
      .then(response => setJobs({ jobs: response.data }))
      .catch(error => {
        console.log(error);
      });
  }
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
    <>
      <Container>
        <div
          className="w-5/6 mx-auto flex rounded border-2 button-hover-color mt-4"
          style={
            isFocused ? { borderColor: "#51d88a" } : { borderColor: "#dae1e7" }
          }
        >
          <form
            className="h-full flex flex-no-wrap flex-1 p-4 bg-white"
            onSubmit={handleSubmit}
          >
            <input
              className="h-full lg:text-lg bg-transparent text-base appearance-none lg:w-3/4 w-3/5 text-grey p-4 focus:outline-none"
              type="text"
              placeholder="Job Title"
              name="search"
              onFocus={focus}
              onBlur={focusOut}
              onChange={handleChange}
              value={values.search || ""}
            />
            <input
              className=" h-full overflow-hidden lg:text-lg bg-transparent  text-base appearance-none lg:w-1/6 w-2/5 text-grey pt-4 pb-4 focus:outline-none "
              type="number"
              placeholder="12345"
              name="location"
              onFocus={focus}
              onBlur={focusOut}
              onChange={handleChange}
              value={values.location || ""}
            />

            <ButtonPrimary className="button-hover-color hover:bg-green-600">
              Submit
            </ButtonPrimary>
          </form>
        </div>
      </Container>
      <IndexSort />
    </>
  );
}

export function IndexSort() {
  const { setJobs } = useContext(FetchContext);
  async function setBase() {
    navigate("/");
    await axios
      .get('http://127.0.0.1:8000/jobs')
      .then(response => setJobs({ jobs: response.data }))
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <Container>
      <div className="w-5/6 mx-auto flex justify-center">
        <Card className="button-hover-scale ml-0" >
          <Link
            className="lg:text-base text-xs border-2 truncate font-semibold w-full h-full flex justify-center lg:p-4 p-2 bg-white button-hover-color hover:border-green-400"
            activeClassName="border-green-400 shadow"
            to="/"
            onClick={setBase}
          >
            Home
          </Link>
        </Card>
        <Card
          className="button-hover-scale"
          activeClassName="border-green-400 shadow"
        >
          <Link
            className="lg:text-base text-xs border-2 truncate font-semibold w-full h-full flex justify-center lg:p-4 p-2 bg-white button-hover-color hover:border-green-400"
            to="/jobs"
          >
            Jobs
          </Link>
        </Card>
        <Card
          className="button-hover-scale"
          to="/jobs"
          activeClassName="border-green-400 shadow"
        >
          <Link
            className="lg:text-base text-xs border-2 truncate font-semibold w-full h-full flex justify-center lg:p-4 p-2 bg-white button-hover-color hover:border-green-400"
            to="/jobs"
            activeClassName="border-green-400 shadow"
          >
            Companies
          </Link>
        </Card>

        <Card
          className="button-hover-scale mr-0"
          to="/jobs"
          activeClassName="border-green-400 shadow"
        >
          <Link
            className="lg:text-base text-xs border-2 truncate font-semibold w-full h-full flex justify-center lg:p-4 p-2 bg-white button-hover-color hover:border-green-400"
            to="/jobs"
            activeClassName="border-green-400 shadow"
          >
            Trending
          </Link>
        </Card>
      </div>
    </Container>
  );
}
