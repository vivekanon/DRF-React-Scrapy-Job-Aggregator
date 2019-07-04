import React, { useState, useContext } from "react";
import validateRegister from "../../formAuth/validateRegister";
import useFormValidation from "../../formAuth/useFormValidation";
import { LoginContext } from "../../../../../store/login";
import axios from "axios";
import FormTop from "../form/formTop";
import FormBottom from "../form/formBottom";
const INITIAL_STATE = {
  email: "",
  password: ""
};
export default function RegisterForm() {
  const { setIsLoggedIn, setRegisterOpen } = useContext(LoginContext);
  const {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateRegister, authenticateUser);
  const [authError, setAuthError] = useState(null);
  const [key, setKey] = useState({});
  async function authenticateUser() {
    const { email, password1, password2 } = values;
    await axios
      .post("http://127.0.0.1:8000/rest-auth/registration/", {
        email: email,
        password1: password1,
        password2: password2
      })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        setKey({
          key: token,
          expiration: expirationDate
        });
        setRegisterOpen(false);
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.log("auth error", error);
        setAuthError(error.toString());
      });
  }
  return (
    <div className="flex flex-col lg:w-1/2 w-full flex-grow justify-between h-full p-8 z-20">
      <FormTop />
      <form
        className="flex flex-col justify-around rounded flex-1 mt-2 mb-2 "
        onSubmit={handleSubmit}
      >
        <input
          className={
            (errors.email &&
              "border-red border-2 rounded text-base appearance-none w-full py-4 px-4 text-blue-800 focus:outline-none button-hover-color font-semibold bg-gray-100") ||
            "focus:outline-none border-2 rounded text-base appearance-none w-full py-4 px-4 text-blue-800 button-hover-color focus:border-green-400 font-semibold bg-gray-100"
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
            (errors.password1 &&
              "border-red border-2 rounded text-base appearance-none w-full py-4 px-4 text-blue-800 focus:outline-none button-hover-color font-semibold bg-gray-100") ||
            "focus:outline-none border-2 rounded text-base appearance-none w-full py-4 px-4 text-blue-800 button-hover-color focus:border-green-400 font-semibold bg-gray-100"
          }
          type="password"
          name="password1"
          placeholder="Password"
          value={values.password1 || ""}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password1 && (
          <p className="text-xs text-red-500 ">{errors.password1}</p>
        )}
        <input
          className={
            (errors.password2 &&
              "border-red border-2 rounded text-base appearance-none w-full py-4 px-4 text-blue-800 focus:outline-none button-hover-color font-semibold bg-gray-100") ||
            "focus:outline-none border-2 rounded text-base appearance-none w-full py-4 px-4 text-blue-800 button-hover-color focus:border-green-400 font-semibold bg-gray-100"
          }
          type="password"
          name="password2"
          placeholder="Password"
          value={values.password2 || ""}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password2 && (
          <p className="text-xs text-red-500 ">{errors.password2}</p>
        )}
        {authError && <p className="text-xs text-red-500">{authError}</p>}
        <div className="flex">
          <button
            className="w-1/2 px-8 py-4 text-sm bg-green-400 text-white font-semibold border rounded mr-2 button-hover-color hover:bg-green-600"
            type="submiit"
            disabled={isSubmitting}
          >
            Submit
          </button>
          <button
            onClick={() => setRegisterOpen(false)}
            className="w-1/2 px-8 py-4 text-sm bg-white text-black font-semibold border rounded ml-2 button-hover-color hover:bg-smoke-lightest"
          >
            Cancel
          </button>
        </div>
      </form>
      <FormBottom />
    </div>
  );
}
