import React, { useState, useContext } from "react";
import validateRegister from "../../formAuth/validateRegister";
import useFormValidation from "../../formAuth/useFormValidation";
import { LoginContext } from "../../../../../store/login";
import axios from "axios";
import FormTop from "../form/formTop";
import FormBottom from "../form/formBottom";
import { TextPrimary } from "../../../../shared/text";
import { ButtonPrimary, Button } from "../../../../shared/button";

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
            (errors.password1 &&
              "border-red-600 border-2 rounded appearance-none w-full py-4 px-4 focus:outline-none botton-hover-color bg-gray-100 text-indigo-600") ||
              "focus:outline-none border-2 rounded appearance-none w-full py-4 px-4 botton-hover-color bg-gray-100 focus:border-indigo-600 focus:shadow text-indigo-600"
          }
          type="password"
          name="password1"
          placeholder="Password"
          value={values.password1 || ""}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password1 && (
          <TextPrimary red>{errors.password1}</TextPrimary>
        )}
        <input
          className={
            (errors.password2 &&
              "border-red-600 border-2 rounded appearance-none w-full py-4 px-4 focus:outline-none botton-hover-color bg-gray-100 text-indigo-600") ||
              "focus:outline-none border-2 rounded appearance-none w-full py-4 px-4 botton-hover-color bg-gray-100 focus:border-indigo-600 focus:shadow text-indigo-600"
          }
          type="password"
          name="password2"
          placeholder="Password"
          value={values.password2 || ""}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password2 && (
          <TextPrimary red>{errors.password2}</TextPrimary>
        )}
        {authError && <p className="text-xs text-red-500">{authError}</p>}
        <div className="flex">

        <ButtonPrimary
          className="transform w-1/2"
          disabled={isSubmitting}  
          type="submit"
      >
        <TextPrimary white>Submit</TextPrimary>
      </ButtonPrimary>
         <Button
           onClick={() => setRegisterOpen(false)}
           className="transform  w-1/2">
            <TextPrimary indigo>Cancel</TextPrimary>
         </Button>
         
        </div>
      </form>
      <FormBottom />
    </div>
  );
}
