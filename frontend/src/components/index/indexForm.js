import React, { useState, useContext } from "react";
import { FetchContext } from "../../store/fetch";
import { navigate, Link } from "gatsby";
import { ButtonPrimary } from "../shared/button";
import { Container } from "../shared/container";
import { Card } from "../shared/card";
import { GoSearch } from "react-icons/go";
import axios from "axios";
import { TextPrimary, TextSub } from "../shared/text";

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

  return (
    <>
      <Container>
        <div
          className="lg:w-5/6 w-11/12 mx-auto flex  flex-grow rounded mt-4 border-2 transform"
          style={
            isFocused ? { borderColor: "#5a67d8" } : { borderColor: "#dae1e7" }
          }
        >
          <form
            className="h-full flex flex-no-wrap flex-1 p-4 bg-indigo-50 "
            onSubmit={handleSubmit}
          >
          {console.log(isFocused)}
          <div className="h-full flex justify-center text-3xl self-center items-center text-indigo-600 "> <GoSearch /></div>
         
            <input
              className="h-full lg:text-lg bg-transparent text-base appearance-none lg:w-3/4 w-3/5 text-indigo-600 p-4 focus:outline-none"
              type="text"
              placeholder="Job Title"
              name="search"
              onFocus={focus}
              onBlur={focusOut}
              onChange={handleChange}
              value={values.search || ""}
            />
            <input
              className=" h-full overflow-hidden lg:text-lg bg-transparent text-base appearance-none lg:w-1/6 w-2/5 text-indigo-600 pt-4 pb-4 focus:outline-none "
              type="number"
              placeholder="12345"
              name="location"
              onFocus={focus}
              onBlur={focusOut}
              onChange={handleChange}
              value={values.location || ""}
            />

            <ButtonPrimary className="transform">
              <TextPrimary>
                Submit
              </TextPrimary>
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
      .get("http://127.0.0.1:8000/jobs")
      .then(response => setJobs({ jobs: response.data }))
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <Container>
      <div className="lg:w-5/6 w-11/12 mx-auto flex justify-center">
        <Card className="transform relative ml-0 ">
          <Link
            className="truncate w-full h-full flex justify-center p-4 transform font-thin lg:text-base text-xs"
            activeClassName="card-shadow-indicator font-semibold"
            to="/"
            onClick={setBase}
          >
            <TextSub primary>Home</TextSub>
          </Link>
        </Card>
        <Card className=" transform relative">
          <Link
            className="truncate w-full h-full flex justify-center p-4 transform font-thin lg:text-base text-xs"
            to="/jobs"
            activeClassName="card-shadow-indicator"
          >
            <TextSub primary>Jobs</TextSub>
          </Link>
        </Card>
        <Card className=" transform relative">
          <Link
            className="truncate w-full h-full flex justify-center p-4 transform font-thin lg:text-base text-xs"
            to="/companies"
            activeClassName="card-shadow-indicator"
          >
           <TextSub primary>Companies</TextSub>
          </Link>
        </Card>

        <Card className=" transform relative mr-0">
          <Link
            className="truncate w-full h-full flex justify-center p-4 transform font-thin lg:text-base text-xs"
            to="/trending"
            activeClassName="card-shadow-indicator"
          >
           <TextSub primary>Trending</TextSub>
          </Link>
        </Card>
      </div>
    </Container>
  );
}
