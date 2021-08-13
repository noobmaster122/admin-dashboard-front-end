import React from 'react';
import {Wrapper} from './wrapper.div'
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';


export const CustomTitle = styled(({children, ...props})=>(
    <Wrapper
    Yaligment="center"
    >
        <Typography 
        variant="h3" 
        gutterBottom
        {...props}>
            {children}
        </Typography>
    </Wrapper>
))`

text-align: center;
color: #21094E;
font-weight: bold !important;
`;
