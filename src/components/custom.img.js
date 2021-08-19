import React from 'react';
import styled from "styled-components";

export const CustomImg = styled(({...props})=>(
    <img {...props} />
))`
width: 500px;
max-width: 500px;
@media (max-width: 600px) {
    width: 300px !important;
    max-width: 300px !important;
  }
@media (max-width: 400px) {
width: 200px !important;
max-width: 200px !important;
}
`;
