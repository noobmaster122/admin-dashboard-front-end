import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Wrapper} from './wrapper.div'
import {CustomLabel} from "./input.label"
import styled from "styled-components";
import Autocomplete from '@material-ui/lab/Autocomplete';

const timeIntervalsArr = () => {
    let intervalArr = []
    for(let x=8; x<16; x++){
        for(let y = 0; y <= 60; y = y+15){
        let formatedX = x/10 < 1 ? `0${x}` : x;
        let formatedY = y;
        if(y === 0) formatedY = `0${y}`;
        if(y === 60) {
        formatedX = x+1;
        formatedX = formatedX/10 < 1 ? `0${formatedX}` : formatedX;
        formatedY = `00`;
        }
            intervalArr.push(`${formatedX}:${formatedY}`)
        }
    }
    let unique = [...new Set(intervalArr)]; 
    return unique;
}

export const CustomAutoComplete = styled(({...props})=>(
    <Wrapper
    Yaligment="center"
    customPadding="5px"
    >
    <CustomLabel>{props?.inputId.replaceAll("_", " ")}</CustomLabel>
    <Autocomplete
    {...props}
      id={props.inputId}
      getOptionLabel={(option) => option}
      options={timeIntervalsArr()}
      renderInput={(params) => <TextField {...params} variant="outlined"
      value={props.Formik?.values[props.inputId]}
      onChange={props.Formik?.handleChange}
      error={props.Formik?.touched[props.inputId] && Boolean(props.Formik?.errors[props.inputId])}
      helperText={props.Formik?.touched[props.inputId] && props.Formik?.errors[props.inputId]}
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
