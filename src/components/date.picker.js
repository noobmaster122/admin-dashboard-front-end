import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Wrapper} from './wrapper.div'
import {CustomLabel} from "./input.label"
import styled from "styled-components";

export const DatePickers = styled(({...props})=>(
    <Wrapper
    Yaligment="center"
    customPadding="5px"
    >
    <CustomLabel>{props?.inputId.replaceAll("_", " ")}</CustomLabel>
    <TextField 
    {...props}
    id={props.inputId}
    type="date"
    variant="outlined"
    value={props.Formik?.values[props.inputId]}
    onChange={props.Formik?.handleChange}
    error={props.Formik?.touched[props.inputId] && Boolean(props.Formik?.errors[props.inputId])}
    helperText={props.Formik?.touched[props.inputId] && props.Formik?.errors[props.inputId]}
    />
    </Wrapper>
))`
width: 300px;
max-width: 300px;
.MuiInputBase-input{
    border: 3px solid #511281 !important;
    border-radius: 5px;
}
&:hover{
   
}
$:focus{
    border-color: #3f51b5;
}
`;
