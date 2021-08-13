import React, {useContext} from 'react';
import {Store} from '../store'
import * as yup from 'yup';
import {StyledTextField} from './styled.textfield';
import {CustomAutoComplete} from './custom.autocomplete'
import {Btn} from './custom.btn'
import {DatePickers} from './date.picker'
import Axios from 'axios'
import {timeIntervalsArr} from '../api/time.intervals'
import { Formik, Form } from "formik";
import {CustomTitle} from "./custom.title"


const Schema = yup.object({
  nationalite: yup
  .string("Enter nationality")
  .required("field is required"),
  nom_de_famille: yup
  .string("Enter familly name")
  .required("field is required"),
  prenom: yup
  .string('Enter name')
  .required('field is required'),
  nmr_tlf: yup
  .string("Enter phone number")
  .required("field is required")
  .test('len', 'phone number must have 10 digits', function(val){ return !!val ? val.length === 10 : false; })
  .test('Digits only', 'The field should have digits only', function(value){ /^\d+$/.test(value)}),
  date_naissance: yup
  .string("Enter birthday date")
  .required("field is required")
  .test('len', 'date format error', function(val){ return !!val ? val.length === 10 : false; }),
  date_rendez_vous: yup
  .string("Enter reservation date")
  .required("field is required")
  .test('len', 'date format error', function(val){ return !!val ? val.length === 10 : false; }),
  heure_rendez_vous : yup
  .string("enter time")
  .required("field is required"),
  // .test(s
  //   'validdate',
  //   'date been already chosen by another client',
  //   function(){
  //     return new Promise(async(resolve)=>{
  //       let d = JSON.stringify(this.options.parent.date_rendez_vous)
  //       let t = JSON.stringify(this.options.parent.heure_rendez_vous)
  //         Axios.get(`http://localhost:5001/api/v1/client/is-date-open?date=${d}&time=${t}`)
  //         .then(res => {
  //           if(res.data.length > 0) resolve(false);
  //           resolve(true);
  //         })
  //         .catch(e =>{
  //           console.log(e)
  //           resolve(true)
  //         })
  //     })
  //   }
  // ),
  type_passport: yup
  .string("Enter passport type")
  .required("field is required"),
  nmr_passport: yup
  .string("Enter passport number")
  .required("field is required"),
  date_emission: yup
  .string("Enter passport emission date")
  .required("field is required")
  .test('len', 'date format error', function(val){ return !!val ? val.length === 10 : false; }),
  date_expiration: yup
  .string("Enter passport emission date")
  .required("field is required")
  .test('len', 'date format error', function(val){ return !!val ? val.length === 10 : false; }),
  lieu_passport: yup
  .string("Enter passport emission state")
  .required("field is required"),
  type_visa: yup
  .string("Enter passport visa type")
  .required("field is required")
});


const WithMaterialUI = () => {
const {state, dispatch} = useContext(Store);

const submitForm = (values) =>{
  alert(JSON.stringify(values, null, 2));
}

const initialValues = {
  nationalite: 'Algerian',
  nom_de_famille: '',
  prenom:'',
  nmr_tlf:'',
  date_naissance: '',
  heure_rendez_vous: '',
  date_rendez_vous: '',
  type_passport: '',
  nmr_passport: '',
  date_emission: '',
  date_expiration: '',
  lieu_passport: '',
  type_visa: '',
}

  return (
<>
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
         onSubmit={submitForm}
        >
      {(formik) => {
        const {
          values,
          setFieldValue
        } = formik;
        return(
            <Form>
              <CustomTitle>
                Add client
              </CustomTitle>
              <StyledTextField 
                inputId="nationalite"
                formikhelper={formik}
                type="text"
                disabled
              />
              <StyledTextField 
                inputId="nom_de_famille"
                formikhelper={formik}
                type="text"
              />
              <StyledTextField 
                inputId="prenom"
                formikhelper={formik}
                type="text"
              />
              <StyledTextField 
                inputId="nmr_tlf"
                formikhelper={formik}
                type="text"
              />
              <DatePickers 
                  inputId="date_naissance"
                  formikhelper={formik}
              />
              <DatePickers 
                  inputId="date_rendez_vous"
                  formikhelper={formik}
              />
              <CustomAutoComplete 
              inputId="heure_rendez_vous"
              inputOptions={timeIntervalsArr()}
              onChange={(e, value) => {
                setFieldValue(
                  "heure_rendez_vous",
                  value !== null ? `${value}` : `${values["heure_rendez_vous"]}`
                );
              }}
              formikhelper={formik}
              />
              <CustomAutoComplete 
              inputId="type_passport"
              inputOptions={["Normal", "Commecial"]}
              onChange={(e, value) => {
                setFieldValue(
                  "type_passport",
                  value !== null ? `${value}` : `${values["type_passport"]}`
                );
              }}
              formikhelper={formik}
              />
              <StyledTextField 
                inputId="nmr_passport"
                formikhelper={formik}
                type="text"
              />
              <DatePickers 
                  inputId="date_emission"
                  formikhelper={formik}
              />
              <DatePickers 
                  inputId="date_expiration"
                  formikhelper={formik}
              />
              <CustomAutoComplete 
              inputId="lieu_passport"
              inputOptions={["Sidi bel abbes", "Oran"]}
              onChange={(e, value) => {
                setFieldValue(
                  "lieu_passport",
                  value !== null ? `${value}` : `${values["lieu_passport"]}`
                );
              }}
              formikhelper={formik}
              />
              <CustomAutoComplete 
              inputId="type_visa"
              inputOptions={["travaille", "touriste"]}
              onChange={(e, value) => {
                setFieldValue(
                  "type_visa",
                  value !== null ? `${value}` : `${values["type_visa"]}`
                );
              }}
              formikhelper={formik}
              />
              <Btn
              variant="contained" color="primary" type="submit">
                submit
              </Btn>
            </Form>
        );
      }}
      </Formik>
    </>
  );
};

export default WithMaterialUI;
