import React, { useContext } from "react";
import { Link } from "gatsby";
import { LoginContext } from "../../../../store/login";
import { navigate } from "gatsby";
import { ButtonPrimary, Button } from "../../../shared/button";
import { TextPrimary } from "../../../shared/text";
export default function LoggedInWrapper() {
  const { setIsLoggedIn, isLoggedIn } = useContext(LoginContext);
  return (
    <>
    <Button
     onClick={() => {
      setIsLoggedIn(localStorage.removeItem("isLoggedIn"));
    }}>
      <TextPrimary indigo>Logout</TextPrimary>
    </Button>
      <ButtonPrimary
      onClick={() => navigate("/favorite")}>
       <TextPrimary White>Profile</TextPrimary>
      </ButtonPrimary>
 
    </>
  );
}
