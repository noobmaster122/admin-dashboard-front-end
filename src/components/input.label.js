import styled from "styled-components";


export const CustomLabel = styled(({children, ...props})=>(
    <label
    {...props}>
        {children}
    </label>
))`
   padding-bottom: 5px;
   text-align : center;
`;