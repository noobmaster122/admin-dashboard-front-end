import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

// this is verbose and shitty
const validate = values =>{
    const errors={}
    if(!values.firstName){
        errors.firstName = 'Required';
    }else if(values.firstName.length > 15){
        errors.firstName = 'first name too long';
    }
    if(!values.lastName){
        errors.lastName = 'Required';
    }else if(values.lastName.length > 20){
        errors.lastName = "last name too long";
    }
    if(!values.email){
        errors.email = "Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "invalid email format";
    }
    return errors;
}

export const SignupForm = () => {
    // Note that we have to initialize ALL of fields with values. These
    // could come from props, but since we don’t want to prefill this form,
    // we just use an empty string. If we don’t do this, React will yell
    // at us.
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
                        .max(15, "who the fuck has a 15+ char name")
                        .min(3, "short name")
                        .required('required'),
        lastName: Yup.string()
                    .max(20, "ur name is too damn long...")
                    .min(3, 'ur name is too short')
                    .required('fooking required'),
        email: Yup.string()
                  .email('invalid email format')
                  .required("required")
      }),
      onSubmit: values => {
        console.log(formik.errors)
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          {...formik.getFieldProps('firstName')}
        />
        {formik.errors.firstName && formik.touched.firstName ? <div>{formik.errors.firstName}</div> : null}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && formik.touched.lastName ? <div>{formik.errors.lastName}</div> : null}
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
        <button type="submit">Submit</button>
      </form>
    );
  };