import React from "react";
import {Wrapper} from "./wrapper.div"
import notFound from "../quetion.mark.err.png"
import {CustomLabel} from "./input.label"
import {CustomImg} from "./custom.img"

export const ErrorDiv = () => {
    return (
        <Wrapper
        xAligment="center"
        >
            <CustomImg src={notFound} width="100%" height="100%"
             />
            <CustomLabel>I dont think i got what you are looking for !</CustomLabel>
        </Wrapper>
    );
}