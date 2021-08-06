import React from 'react';
 import { useFormik } from 'formik';
 
 // Create empty context
 const FormikContext = React.createContext({});
 
 // Place all of what’s returned by useFormik into context
 export const Formik = ({ children, ...props }) => {
     console.log(props)
     console.log(JSON.stringify(children, undefined, 2))
   const formikStateAndHelpers = useFormik(props);
   console.log(formikStateAndHelpers)
   return (
     <FormikContext.Provider value={formikStateAndHelpers}>
       {typeof children === 'function'
         ? children(formikStateAndHelpers)
         : children}
     </FormikContext.Provider>
   );
 };