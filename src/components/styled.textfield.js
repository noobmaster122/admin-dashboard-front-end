import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {Wrapper} from "./wrapper.div"
import {CustomLabel} from "./input.label"
import TextField from "@material-ui/core/TextField"

export const StyledTextField = styled(({...props})=>(
    <Wrapper 
    Yaligment="center"
    customPadding="5px">
    <CustomLabel>{props.inputId}</CustomLabel>
    <TextField 
       {...props} 
       fullWidth
       id={props.inputId}
       name={props.inputId}
       type={props.inputId === 'password' ? 'password' : 'text'}
       variant="outlined"
       value={props.Formik?.values[props.inputId]}
       onChange={props.Formik?.handleChange}
       error={props.Formik?.touched.password && Boolean(props.Formik?.errors.password)}
       helperText={props.Formik?.touched.password && props.Formik?.errors.password}
    />
    </Wrapper>
))`
    max-width: 300px;
    .MuiInputBase-input{
        border: 3px solid #511281 !important;
        border-radius: 5px;
    }
`;
