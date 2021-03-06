import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: ${props => props.xAligment};
    align-items: ${props => props.Yaligment};
    flex-direction: column;
    padding: ${props => props.customPadding};
    padding-top: ${props => props.tpPadding};
    padding-bottom: ${props => props.pbtPadding};
    border-radius: ${props => props.brRad};
    box-shadow: ${props => props.bxShadow};
    background-color: ${props => props.pgClr};
    height: ${props => props.fullHeight};
    background: ${props => props.pgColor};
    width: ${props => props.customWidth};
`;