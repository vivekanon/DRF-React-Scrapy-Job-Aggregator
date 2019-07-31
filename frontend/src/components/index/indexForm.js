import React, { useState, useContext } from "react";
import axios from 'axios'
import { FetchContext } from "../../store/fetch";
import { navigate } from "gatsby";
import { ButtonPrimary } from "../shared/button";
import { Container, SubContainer } from "../shared/container";
import { GoSearch } from "react-icons/go";
import { TextPrimary } from "../shared/text";
import IndexNavigation from './indexNavigation'

export function IndexForm() {
  const [isFocused, setIsFocused] = useState(false);
  const { setLoading, setData, values, setValue } = useContext(FetchContext);
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
    setLoading(true);
    await axios
      .get(`http://127.0.0.1:8000/?search=${search}`)
      .then(response => setData({ payload: response.data }))
      .catch(error => {
        console.log(error);
      });
      setLoading(false);
  }

  return (
    <>
       <Container>
        <div
          className="mx-auto flex flex-1 w-full flex-grow rounded mt-4 border-2 transform"
          style={
            isFocused ? { borderColor: "#5a67d8" } : { borderColor: "#dae1e7" }
          }
        >
          <form
            className="h-full flex flex-no-wrap flex-1 p-4 bg-indigo-50 "
            onSubmit={handleSubmit}
          >
    
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
      <IndexNavigation />
    </>
  );
}

