import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Wrapper} from './wrapper.div'
import {CustomLabel} from "./input.label"
import styled from "styled-components";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {fieldKeyFormater} from "../api/keys.formatter"

export const CustomAutoComplete = styled(({...props})=>(
    <Wrapper
    Yaligment="center"
    customPadding="5px"
    >
    <CustomLabel>{fieldKeyFormater(props?.inputId)}</CustomLabel>
    <Autocomplete
    {...props}
      id={props.inputId}
      getOptionLabel={(option) => option}
      options={props.inputOptions}
      renderInput={(params) => <TextField {...params} variant="outlined"
        value={props.formikhelper.values[props.inputId]}
        // errorhandler={props.formikhelper.touched[props.inputId] && Boolean(props.formikhelper.errors[props.inputId])}
        helperText={props.formikhelper.touched[props.inputId] && props.formikhelper.errors[props.inputId]}
      />}
    />
    </Wrapper>
))`
width: 300px;
max-width: 300px;
&:hover{
   
}
$:focus{
    border-color: transparent !important;
}
`;
