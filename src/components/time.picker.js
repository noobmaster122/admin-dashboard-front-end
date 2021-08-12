import { Wrapper } from "./wrapper.div"
import TextField from '@material-ui/core/TextField';
import {CustomLabel} from './input.label';
import styled from "styled-components";
// import {timeIntervalsArr} from "../api/time.intervals"

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


export const CustomTimePucker = styled(({...props}) => (
    <Wrapper
    Yaligment= "center"
    customPadding="5px"
    >
    <CustomLabel>{props.inputId}</CustomLabel>
        <TextField
        {...props}
        id="time"
        type="time"
        defaultValue="08:15"
        options={["loading", "loading", "08:15"]}
        InputLabelProps={{
        shrink: true,
        }}
        inputProps={{
        step: 900,
        }}
        variant="outlined"

    />
  </Wrapper>
))`
width: 300px;
max-width: 300px;

`;