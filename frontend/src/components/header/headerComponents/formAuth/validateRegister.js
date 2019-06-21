export default function validateRegister(values) {
    let errors = {};
    //email errors
    if (!values.email) {
      errors.email = 'Email Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    //passsword errors
    if(!values.password1) {
        errors.password1 = 'Password Required'
    } else if(values.password1.length < 6) {
        errors.password1 = 'Password must be > 6 characters'
    }
    if(!values.password2) {
        errors.password2 = 'Password Required'
    } else if(values.password2.length < 6) {
        errors.password2 = 'Password must be > 6 characters'
    }
    if(values.password1 != values.password2 && values.password1 != values.password2 ) 
      errors.password1 = 'Password does not match'
    return errors;

}
