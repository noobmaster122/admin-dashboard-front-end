import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {Wrapper} from "./wrapper.div"
import {CustomLabel} from "./input.label"
import TextField from "@material-ui/core/TextField"
import {fieldKeyFormater} from "../api/keys.formatter"

export const StyledTextField = styled(({...props})=>(
    <Wrapper 
    Yaligment="center"
    customPadding="5px">
    <CustomLabel>{fieldKeyFormater(props.inputId)}</CustomLabel>
    <TextField 
       {...props} 
       fullWidth
       id={props.inputId}
       name={props.inputId}
       variant="outlined"
       onChange={props.formikhelper?.handleChange}
       value={props.formikhelper.values[props.inputId]}
    //    errorhandler={props.formikhelper.touched[props.inputId] && Boolean(props.formikhelper.errors[props.inputId])}
       helperText={props.formikhelper.touched[props.inputId] && props.formikhelper.errors[props.inputId]}
    />
    </Wrapper>
))`
    max-width: 300px;
    .MuiInputBase-input{
        border: 3px solid #511281 !important;
        border-radius: 5px;
    }
`;
