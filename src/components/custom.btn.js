import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Wrapper} from './wrapper.div'
import styled from "styled-components";

export const Btn = styled(({children, ...props})=>(
    <Wrapper
    Yaligment="center"
    tpPadding="20px">
        <Button {...props}>
            {children}
        </Button>
    </Wrapper>
))`
    width: 300px;
    max-width: 300px;
    color: whitesmoke !important;
  background-color: #511281 !important;  

`;


