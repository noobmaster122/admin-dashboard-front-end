import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import {Wrapper} from "./wrapper.div"

export const SelectBtnGrp = styled(({children, ...props})=>(
    <Wrapper>
        <ButtonGroup disableElevation variant="contained" color="primary">
            <Button onClick={()=>props.searchOption("id")}>One</Button>
            <Button onClick={() => props.searchOption("nom_de_famille")}>Two</Button>
        </ButtonGroup>
    </Wrapper>
))`

`;


