import React, { useState, useEffect } from 'react'

export default function formValidation(initialState, validate, authenticate) {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)

    useEffect(()=> {
        if(isSubmitting) {
            const noErrors = Object.keys(errors).length === 0
            if(noErrors) {
                authenticate()
                console.log('authenticated', values.email, values.password);
                setSubmitting(false)
            } else {
                setSubmitting(false)
            }
        }
    }, [errors])

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    function handleBlur() {
        const validationErrors = validate(values)
        setErrors(validationErrors)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validate(values)
        setErrors(validationErrors)
        setSubmitting(true)
    }
 

    return { 
        handleChange, 
        handleSubmit, 
        values, 
        handleBlur, 
        errors, 
        isSubmitting
     }
}