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
    <CustomLabel>date picker</CustomLabel>
    <TextField 
    {...props}
    id={props.inputId}
    type="date"
    variant="outlined"
    defaultValue="2017-05-24"
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
