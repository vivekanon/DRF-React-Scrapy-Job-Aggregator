import React, { useContext } from "react";
import { Link } from "gatsby";
import { LoginContext } from "../../../../store/login";
import { navigate } from "gatsby";
export default function LoggedInWrapper() {
  const { setIsLoggedIn, isLoggedIn } = useContext(LoginContext);
  return (
    <>
      <button
        className="lg:px-6 lg:py-3 px-4 font-semibold text-blue-800 text-xs "
        onClick={() => {
          setIsLoggedIn(localStorage.removeItem("isLoggedIn"));
        }}
      >
        Logout
      </button>
      <button
        className="lg:px-6 lg:py-3 py-2 px-3 bg-green-400 font-semibold text-white rounded shadow-md text-xs botton-hover-color hover:bg-green-600"
        onClick={() => navigate("/favorite")}
      >
        Profile
      </button>
    </>
  );
}
