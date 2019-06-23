import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import useFormValidation from "../../formAuth/useFormValidation";
import validateAuth from "../../formAuth/validateAuth";
import { LoginContext } from "../../../../../store/login";

const INITIAL_STATE = {
  email: "",
  password: ""
};

export default function LoginForm() {
  const { setLoginOpen, setIsLoggedIn, isLoggedIn } = useContext(LoginContext);
  const {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateAuth, authenticateUser);
  const [authError, setAuthError] = useState(null);
  const [key, setKey] = useState({});

  async function authenticateUser() {
    const { email, password } = values;
    await axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        email: email,
        password: password
      })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        setKey({
          key: token,
          expiration: expirationDate
        });
        setLoginOpen(false);
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.log("auth error", error);
        setAuthError(error.toString());
      });
  }
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col lg:w-1/2 w-full justify-between h-full">
      <form
        className="flex flex-col justify-around rounded flex-1 mt-2 mb-2"
        onSubmit={handleSubmit}
      >
        <input
          className={
            (errors.email &&
              "border-red bg-white border-2 rounded text-base appearance-none w-full py-4 px-4 text-blue-800 focus:outline-none botton-hover-color") ||
            "focus:outline-none bg-white border-2 rounded text-base appearance-none w-full py-4 px-4 text-blue-800 botton-hover-color focus:border-green-400 focus:shadow"
          }
          type="text"
          placeholder="Email@email.com"
          name="email"
          value={values.email || ""}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-xs text-red-500 ">{errors.email}</p>
        )}
        <input
          className={
            (errors.password &&
              "border-red bg-white border-2 rounded text-base appearance-none w-full py-4 px-4 text-blue-800 focus:outline-none botton-hover-color ") ||
            "focus:outline-none bg-white border-2 rounded text-base appearance-none w-full py-4 px-4 text-blue-800 botton-hover-color focus:border-green-400 focus:shadow"
          }
          type="password"
          name="password"
          placeholder="Password"
          value={values.password || ""}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-xs text-red-500 ">{errors.password}</p>
        )}
        {authError && <p className="text-xs text-red-500">{authError}</p>}
        <div className="flex justify-between">
          <button
            className="w-1/2 px-8 py-4 text-sm bg-green-400 text-white font-semibold border rounded mr-2 botton-hover-color hover:bg-green-600"
            type="submiit"
            disabled={isSubmitting}
          >
            Submit
          </button>
          <button
            onClick={() => setLoginOpen(false)}
            type="reset"
            className="w-1/2 px-8 py-4 text-sm bg-white text-black font-semibold border rounded ml-2 botton-hover-color hover:bg-smoke-lightest"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
