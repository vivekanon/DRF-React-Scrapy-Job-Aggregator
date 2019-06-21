import React, { useContext } from 'react'
import { Link } from "gatsby"
import {LoginContext} from '../../../../store/login'
import { navigate } from "gatsby"
export default function LoggedInWrapper() {
  const { setIsLoggedIn, isLoggedIn } = useContext(LoginContext)
    return (
        <>
        <button className="lg:px-6 lg:py-3 px-4 font-semibold text-blue-top text-xs "
<<<<<<< HEAD
           onClick={()=> {setIsLoggedIn(localStorage.removeItem('isLoggedIn'))}}>
          Logout
        </button>
           <button className="lg:px-6 lg:py-3 py-2 px-3 bg-green-light font-semibold text-white rounded shadow-md text-xs botton-hover-color hover:bg-green"
           onClick={()=> navigate('/404')}>
=======
          onClick={()=> {setIsLoggedIn(localStorage.removeItem('isLoggedIn'))}}>
            Logout
        </button>
           <button className="lg:px-6 lg:py-3 py-2 px-3 bg-green-light font-semibold  rounded shadow-md text-xs botton-hover-color hover:bg-green">
           <Link
            className="text-white no-underline"
            to="/profile">
>>>>>>> 1aae87f8a3b794e7caba9457b8e2ce58f6488cf6
             Profile
             </Link>
        </button>
        </>
    )
}