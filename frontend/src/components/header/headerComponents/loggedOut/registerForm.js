import React, {useState, useContext} from 'react'
import validateRegister from '../formAuth/validateRegister'
import useFormValidation from '../formAuth/useFormValidation'
import {LoginContext} from '../../../../store/login'
import axios from 'axios'

const INITIAL_STATE = {
    email: '',
    password: ''
}
export default function RegisterForm() {
    const { setIsLoggedIn, setLoginOpen } = useContext(LoginContext)
    const { handleChange, handleSubmit, values, handleBlur, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateRegister, authenticateUser);
    const [authError, setAuthError] = useState(null)
    const [key, setKey] = useState({});
    async function authenticateUser() {
        const { email, password1, password2 } = values
            await axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
                email: email,
                password1: password1,
                password2: password2
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
    return (
        <div className="flex flex-col justify-between h-full">
                <p className="text-blue-top font-semibold text-xs">
                Register
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
                        className={errors.password1 && 'border-red bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top focus:outline-none botton-hover-color' || 'focus:outline-none bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top botton-hover-color focus:border-green-light'}
                        type="password"
                        name="password1"
                        placeholder="Password"
                        value={values.password1 || ''}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.password1 && <p className="text-xs text-red ">{errors.password1}</p>}
                    <input
                        className={errors.password2 && 'border-red bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top focus:outline-none botton-hover-color' || 'focus:outline-none bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top botton-hover-color focus:border-green-light'}
                        type="password"
                        name="password2"
                        placeholder="Password"
                        value={values.password2 || ''}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p className="text-xs text-red ">{errors.password2}</p>}
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
            </div>
    )
}