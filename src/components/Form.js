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
import {setApplication, isReservationDateOpen, ModifyClientById} from "../api/clientApi"
import {Schema} from "../api/yup.schema"

const ApplicationForm = (props) => {
const {state, dispatch} = useContext(Store);
let initState = {
  ...state.client.data
}
const submitForm = async(values, actions) =>{
  console.log(actions)
  alert(JSON.stringify(values, null, 2));
  // conditional query
  // if modify screen , update
  if(props.screen === 'Modify'){
    console.log(await ModifyClientById(state.client.id, values))
    // move back to previous component in modify screen
    dispatch({type:'UPDATEUI'})
  }else if(props.screen === 'Add'){
    // add client application
    console.log(await setApplication(values));
  }
  actions.setSubmitting(false);
  // reset client fields
  dispatch({type: 'CLEARFIELDS'});
  // reset form
  actions.resetForm({
    values: {
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
    type_visa: ''
  }
  });
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
        console.log("am inside teh formik comp ", values)
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
              value={values["heure_rendez_vous"]}
              onChange={(e, value) => {
                setFieldValue(
                  "heure_rendez_vous",
                  value !== null ? value : values["heure_rendez_vous"]
                );
              }}
              formikhelper={formik}
              />
              <CustomAutoComplete 
              inputId="type_passport"
              inputOptions={["Normal", "Commecial"]}
              value={values["type_passport"]}
              onChange={(e, value) => {
                setFieldValue(
                  "type_passport",
                  value !== null ? value : values["type_passport"]
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
              value={values["lieu_passport"]}
              onChange={(e, value) => {
                setFieldValue(
                  "lieu_passport",
                  value !== null ? value : values["lieu_passport"]
                  );
              }}
              formikhelper={formik}
              />
              <CustomAutoComplete 
              inputId="type_visa"
              inputOptions={["travaille", "touriste"]}
              value={values["type_visa"]}
              onChange={(e, value) => {
                setFieldValue(
                  "type_visa",
                  value !== null ? value : values["type_visa"]
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

export default ApplicationForm;
