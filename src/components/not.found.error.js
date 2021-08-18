import React from "react";
import {Wrapper} from "./wrapper.div"
import notFound from "../quetion.mark.err.png"
import {CustomLabel} from "./input.label"

export const ErrorDiv = () => {
    return (
        <Wrapper
        customWidth="400px">
            <img src={notFound} width="100%" height="100%" />
            <CustomLabel>I dont think i got what you are looking for !</CustomLabel>
        </Wrapper>
    );
}