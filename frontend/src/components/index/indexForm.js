import React, {useState, useEffect } from "react";
import axios from 'axios';
export function IndexForm() {
  const [isFocused, setIsFocused] = useState(false);
  const [data, setData] = useState([]);
  const focus = () => setIsFocused(true);
  const focusOut = () => setIsFocused(false);

  useEffect(() => {
    function getData() {
      axios
      .get("http://127.0.0.1:8000/jobs/")
      .then(response => setData(response.data));
    }
    getData();
  }, []);
  return (
    <>
      <div className="flex w-full bg-white montserrat lg:pl-2 lg:pr-2 pl-4 pr-4 lg:pt-12 pt-6 pb-6">
        <div className="lg:w-3/4 w-full mx-auto flex rounded border-2 botton-hover-color" style={isFocused ? {borderColor: '#51d88a'} : {borderColor: '#dae1e7'}}>
          <form className="h-full flex flex-wrap flex-1  p-4" >
            <input
              className="h-full lg:text-lg bg-transparent text-base appearance-none lg:w-3/4 w-3/5 text-grey p-4 focus:outline-none"
              type="text"
              placeholder="Job Title"
              onFocus={focus}
              onBlur={focusOut}
            />
            <input
              className=" h-full lg:text-lg bg-transparent  text-base appearance-none lg:w-1/6 w-2/5 text-grey pt-4 pb-4 focus:outline-none "
              type="text"
              placeholder="12345"
              onFocus={focus}
              onBlur={focusOut}
            />
          </form>
          <div className="flex justify-center items-center pl-4 pr-4">
            <button className="px-6 py-3 bg-green-light font-semibold text-white rounded shadow-md text-xs botton-hover-color hover:bg-green">
              Submit
            </button>
          </div>
        </div>
      </div>
      <IndexSort />
    </>
  );
}

export function IndexSort() {
  return (
    <>
      <div className="flex w-full bg-white montserrat pb-12">
        <div className="lg:w-3/4 w-4/5 mx-auto flex justify-center ">
          <div className="flex items-center justify-center w-1/4 lg:p-4 p-2 m-2 border-2 rounded hover:border-green-light botton-hover-scale hover:shadow ">
            <p className="lg:text-base text-xs truncate">Home</p>
          </div>
          <div className="flex items-center justify-center  w-1/4 lg:p-4 p-2 m-2 border-2 rounded hover:border-green-light botton-hover-scale  hover:shadow">
            <p className="lg:text-base text-xs truncate">Jobs</p>
          </div>
          <div className="flex items-center justify-center  w-1/4 lg:p-4 p-2 m-2 border-2 rounded hover:border-green-light botton-hover-scale  hover:shadow">
            <p className="lg:text-base text-xs truncate">Company</p>
          </div>
          <div className="flex items-center justify-center  w-1/4 lg:p-4 p-2 m-2 border-2 rounded hover:border-green-light botton-hover-scale  hover:shadow">
            <p className="lg:text-base text-xs truncate">Trending</p>
          </div>
        </div>
      </div>
    </>
  );
}