import React, { useState, useContext, useEffect } from "react";
import { navigate, Link } from "gatsby";
import { FetchContext } from "../../store/fetch";
import axios from "axios";

const initialState = {
  search: "",
  location: ""
};

export function IndexForm() {
  const [isFocused, setIsFocused] = useState(false);
  const [values, setValue] = useState(initialState);
  const { isLoading, setIsLoading, jobs, setJobs } = useContext(FetchContext);
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
      <div className="flex w-full bg-white montserrat lg:pl-2 lg:pr-2 pl-4 pr-4 lg:pt-12 pt-6 pb-6">
        <div
          className="lg:w-3/4 w-full mx-auto flex rounded border-2 botton-hover-color"
          style={
            isFocused ? { borderColor: "#51d88a" } : { borderColor: "#dae1e7" }
          }
        >
          <form
            className="h-full flex flex-no-wrap flex-1 p-4"
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

            <button className="px-6 py-3 bg-green-400 font-semibold text-white rounded shadow-md text-xs botton-hover-color hover:bg-green-600">
              Submit
            </button>
          </form>
        </div>
      </div>
      <IndexSort />
    </>
  );
}

export function IndexSort() {
  const { setJobs } = useContext(FetchContext);
  async function setBase() {
    navigate("/");
    await axios
      .get(`http://127.0.0.1:8000/jobs`)
      .then(response => setJobs({ jobs: response.data }))
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="flex w-full bg-white montserrat pb-12">
        <div className="lg:w-3/4 w-4/5 mx-auto flex justify-center ">
          <Link
            className="flex items-center justify-center w-1/4 lg:p-4 p-2 m-2 border-2 rounded hover:border-green-400 botton-hover-scale cursor-pointer hover:shadow"
            to="/"
            activeClassName="border-green-400 shadow"
            onClick={setBase}
          >
            <p className="lg:text-base text-xs truncate">Home</p>
          </Link>
          <Link
            className="flex items-center justify-center w-1/4 lg:p-4 p-2 m-2 border-2 rounded hover:border-green-400 botton-hover-scale cursor-pointer hover:shadow"
            to="/jobs"
            activeClassName="border-green-400 shadow"
          >
            <p className="lg:text-base text-xs truncate">Jobs</p>
          </Link>
          <Link
            className="flex items-center justify-center w-1/4 lg:p-4 p-2 m-2 border-2 rounded hover:border-green-400 botton-hover-scale cursor-pointer hover:shadow"
            to="/companies"
            activeClassName="border-green-400 shadow"
            onClick={setBase}
          >
            <p className="lg:text-base text-xs truncate">Companies</p>
          </Link>
          <Link
            className="flex items-center justify-center w-1/4 lg:p-4 p-2 m-2 border-2 rounded hover:border-green-400 botton-hover-scale cursor-pointer hover:shadow"
            to="/trending"
            activeClassName="border-green-400 shadow"
            onClick={setBase}
          >
            <p className="lg:text-base text-xs truncate">Trending</p>
          </Link>
        </div>
      </div>
    </>
  );
}
