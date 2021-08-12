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
import {DatePickers} from './date.picker'
import Axios from 'axios'

const validationSchema = yup.object({
  prenom: yup
  .string('Enter name')
  .required('field is required'),
  heure_rendez_vous : yup
  .string("enter time")
  .required("field is required"),
  date_rendez_vous: yup
  .string('enter valid date')
  .required('field is required')
  .test(
    'validdate',
    'date been already chosen by another client',
    function(){
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
      prenom:'',
      date_rendez_vous: '',
      heure_rendez_vous: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("am ont getting submitted")
      console.log(values)
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
<>
      <form onSubmit={formik.handleSubmit}>
        <StyledTextField 
          inputId="prenom"
          Formik= {formik}
        />
        <DatePickers 
        inputId="date_rendez_vous"
        Formik= {formik}
        />
        <CustomAutoComplete 
        inputId="heure_rendez_vous"
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
