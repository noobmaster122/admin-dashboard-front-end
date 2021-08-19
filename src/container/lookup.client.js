import React, {useState} from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import {Wrapper} from "../components/wrapper.div";
import {SelectBtnGrp} from "../components/btn.grp"
import { Formik, Form } from "formik";
import * as yup from 'yup';
import {Btn} from "../components/custom.btn"
import {CustomAutoComplete} from "../components/custom.autocomplete"
import {CustomTitle} from "../components/custom.title"
import {getClientsIdNom, getClientByIdNom} from "../api/clientApi"

const Schema = yup.object({
    id_nom_client: yup
    .string("Select client")
    .required("field is required")
})

export const SearchBlock = ({...props})=>{

    const [selectOtions, setSelectOptions] = useState(["filler", "filler"])

    const submitHandler = async(values) => {
        console.log(values)
        alert(JSON.stringify(values, undefined, 2))
        let x = await getClientByIdNom(values)
        console.log(x)

    }

    const initialValues = {
        id_nom_client: ''
    }

    const search_option_handler = () => async (x) => {
        console.log(x)
        let options = await getClientsIdNom(x)
        if(!!options && options.length > 0){
            setSelectOptions([...options]);
        }else{
            setSelectOptions(["not found"]);
        }
    }

    return(
    <>
          <Formik
        initialValues={initialValues}
        validationSchema={Schema}
         onSubmit={submitHandler}
        >
            {(formik)=>{
            const {
                values,
                setFieldValue,
                dirty,
                isSubmitting
                } = formik;
                return(
                    <Form>
                        <CustomTitle>
                            modify / delete
                        </CustomTitle>
                        <SelectBtnGrp searchOption={search_option_handler()}/>
                        <CustomAutoComplete 
                        inputId="id_nom_client" 
                        inputOptions={selectOtions}
                        onChange={(e, value) => {
                            setFieldValue(
                              "id_nom_client",
                              value !== null ? `${value}` : `${values["id_nom_client"]}`
                            );
                          }}
                          formikhelper={formik}
                        />
                        <Btn
                            variant="contained" color="primary" type="submit" 
                        >
                            submit
                        </Btn>
                    </Form>
                );
            }}
        </Formik>
    </>
    );
}


