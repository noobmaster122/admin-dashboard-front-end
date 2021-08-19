import React, {useContext, useEffect} from 'react';
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
import {setApplication, isReservationDateOpen} from "../api/clientApi"
import {Schema} from "../api/yup.schema"


const AddApplicationForm = () => {
const {state, dispatch} = useContext(Store);
useEffect(() => {
  console.log(state)
}, []);

const submitForm = async(values, actions) =>{
  // collect data
  // do api call
  dispatch({type: 'SAVECLIENTDATA', PAYLOAD: values})
  console.log(actions)
  alert(JSON.stringify(values, null, 2));
  console.log(await setApplication(values));
  actions.setSubmitting(false);
  // // reset form
  // actions.resetForm({
  //   values: {...initialValues}
  // });
}

let initState = {
  ...state.client
}

  return (
<>
      <Formik
        initialValues={initState}
        validationSchema={Schema}
         onSubmit={submitForm}
        >
      {(formik) => {
        const {
          values,
          setFieldValue,
          dirty,
          isSubmitting
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
              variant="contained" color="primary" type="submit" disabled={!dirty}
              disabled={isSubmitting}
              >
                submit
              </Btn>
            </Form>
        );
      }}
      </Formik>
    </>
  );
};

export default AddApplicationForm;
