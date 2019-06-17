import React, { useState, useContext, useEffect } from 'react';
import useFormValidation from '../formAuth/useFormValidation'
import validateAuth from '../formAuth/validateAuth'
import { LoginContext } from '../../../../store/login'
import axios from 'axios'

const INITIAL_STATE = {
    email: '',
    password: ''
}

export default function LoginForm() {
    const { setLoginOpen, setIsLoggedIn, isLoggedIn } = useContext(LoginContext)
    const { handleChange, handleSubmit, values, handleBlur, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateAuth, authenticateUser);
    const [authError, setAuthError] = useState(null)
    const [key, setKey] = useState({});
    async function authenticateUser() {
        const { email, password } = values
            await axios.post('http://127.0.0.1:8000/rest-auth/login/', {
                email: email,
                password: password
            }).then(res=> {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                setKey({
                    key: token,
                    expiration: expirationDate
                })
                setLoginOpen(false)
                setIsLoggedIn(true)
            }).catch(error=> {
                console.log('auth error', error)
                setAuthError(error.toString())
            })

    }
    useEffect(()=> {
        localStorage.setItem('isLoggedIn', isLoggedIn)
    }, [isLoggedIn])



    return (
        <div className="flex flex-col justify-between h-full">
        <p className="text-blue-top font-semibold text-xs">
        Login
        </p>
   
        <form className="flex flex-col justify-around rounded flex-1 mt-2 mb-2 " 
        onSubmit={handleSubmit}>
        <input
            className={errors.email && 'border-red bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top focus:outline-none botton-hover-color' || 'focus:outline-none bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top botton-hover-color focus:border-green-light'}
            type="text"
            placeholder="Email@email.com"
            name="email"
            value={values.email || ''}
            onBlur={handleBlur}
            onChange={handleChange}
        />
        {errors.email && <p className="text-xs text-red ">{errors.email}</p>}
        <input
            className={errors.password && 'border-red bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top focus:outline-none botton-hover-color' || 'focus:outline-none bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top botton-hover-color focus:border-green-light'}
            type="password"
            name="password"
            placeholder="Password"
            value={values.password || ''}
            onBlur={handleBlur}
            onChange={handleChange}
        />
        {errors.password && <p className="text-xs text-red ">{errors.password}</p>}
        {authError && <p className="text-xs text-red">{authError}</p>}
          <div className="flex">
            <button 
            className="px-4 py-2 text-xs bg-green-light text-white border rounded m-1"
            type='submiit'
            disabled={isSubmitting}>
            Submit
            </button>
        </div>
        </form>
        {console.log({isLoggedIn})}
    </div>
    )
}
