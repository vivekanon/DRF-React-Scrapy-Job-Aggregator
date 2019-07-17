import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import useFormValidation from "../../formAuth/useFormValidation";
import validateAuth from "../../formAuth/validateAuth";
import FormTop from "../form/formTop";
import { LoginContext } from "../../../../../store/login";
import FormBottom from "../form/formBottom";
import { ButtonPrimary, Button } from "../../../../shared/button";
import { TextSub, TextPrimary } from "../../../../shared/text";

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
    <div className="flex flex-col lg:w-1/2 flex-grow w-full justify-between h-full p-8 z-20">
      <FormTop />
      <form
        className="flex flex-col justify-around rounded flex-1 mt-2 mb-2"
        onSubmit={handleSubmit}
      >
        <input
          className={
            (errors.email &&
              "border-red-600 border-2 rounded appearance-none w-full py-4 px-4 focus:outline-none botton-hover-color bg-gray-100 text-indigo-600") ||
            "focus:outline-none border-2 rounded appearance-none w-full py-4 px-4 botton-hover-color bg-gray-100 focus:border-indigo-600 focus:shadow text-indigo-600"
          }
          type="text"
          placeholder="Email@email.com"
          name="email"
          value={values.email || ""}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && (
          <TextPrimary red>{errors.email}</TextPrimary>
        )}
        <input
          className={
            (errors.password &&
              "border-red-600 border-2 rounded appearance-none w-full py-4 px-4 focus:outline-none botton-hover-color bg-gray-100 text-indigo-600") ||
              "focus:outline-none border-2 rounded appearance-none w-full py-4 px-4 botton-hover-color bg-gray-100 focus:border-indigo-600 focus:shadow text-indigo-600"
          }
          type="password"
          name="password"
          placeholder="Password"
          value={values.password || ""}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password && (
          <TextPrimary red>{errors.password}</TextPrimary>
        )}
        {authError && <p className="text-xs text-red-500">{authError}</p>}
        <div className="flex justify-between ">
        <ButtonPrimary 
            className="w-1/2"
            type="submit"
            disabled={isSubmitting}>
            <TextPrimary white>Submit</TextPrimary>
        </ButtonPrimary>
        <Button 
            className="w-1/2"
            onClick={() => setLoginOpen(false)}
            type="reset">
            <TextPrimary indigo>Cancel</TextPrimary>
            
        </Button>
         
        </div>
      </form>
      <FormBottom />
    </div>
  );
}