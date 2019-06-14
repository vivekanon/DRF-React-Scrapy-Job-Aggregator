import React, { useContext } from "react";
import LoggedInWrapper from './loggedIn/loggedInWrapper'
import LoggedOutWrapper from './loggedOut/loggedOutWrapper'
import { LoginContext } from '../../../store/login'

export default function HeaderRight() {
  const { isLoggedIn } = useContext(LoginContext)

  return (
    <div className="w-2/5 h-full ">
      <div className="relative w-full h-full flex items-center justify-center text-white ">
        { isLoggedIn ?
        <LoggedInWrapper />
        :
        <LoggedOutWrapper />
        }
      </div>
    </div>
  );
}
