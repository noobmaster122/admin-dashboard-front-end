import React, {useContext} from 'react';
import {Store} from '../store'
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {StyledTextField} from './styled.textfield';
import {CustomAutoComplete} from './custom.autocomplete'
import {CustomTimePucker} from './time.picker'
import {Wrapper} from './wrapper.div'
import {Btn} from './custom.btn'
import Axios from 'axios'

const validationSchema = yup.object({
  prenom: yup
  .string('Enter name')
  .required('field is required'),
  nomFamille: yup
  .string('Enter family name')
  .required('field is required'),
  nmrTlf: yup
  .number()
  .integer()
  .max(10, "number format is invalid !"),
  typePassport : yup
  .string("Enter passport type")
  .required("field is required"),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  heure_rendez_vous : yup
  .string("enter time")
  .required("field is required"),
  date_rendez_vous: yup
  .string('enter valid date')
  .required('field is required')
  .test(
    'validdate',
    'date been already chosen by another client',
    function(item){
      console.log(item)
      console.log(this.options);
      return new Promise(async(resolve)=>{
        let d = JSON.stringify(this.options.parent.date_rendez_vous)
        let t = JSON.stringify(this.options.parent.heure_rendez_vous)
          Axios.get(`http://localhost:5001/api/v1/client/is-date-open?date=${d}&time=${t}`)
          .then(res => {
            if(res.data.length > 0) resolve(false);
            resolve(true);
          })
          .catch(e =>{
            console.log(e)
            resolve(true)
          })
      })
    }
  )

});

const WithMaterialUI = () => {
const {state, dispatch} = useContext(Store);

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      Time: "08:00",
      password: '',
      prenom:'hello'
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
<>
      <form onSubmit={formik.handleSubmit}>
        <StyledTextField 
            inputId="password"
            Formik= {formik}
        />
        <StyledTextField 
          inputId="prenom"
          Formik= {formik}
        />
        <CustomAutoComplete 
        inputId="Time"
        Formik= {formik}
        />
        <Btn variant="contained" fullWidth type="submit">
        Submit
        </Btn>
      </form>
    </>
  );
};

export default WithMaterialUI;
