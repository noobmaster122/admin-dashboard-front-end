import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

export const SimpleBackdrop = styled(({ ...props }) => (
  <Backdrop {...props}>
    <CircularProgress color="inherit" />
  </Backdrop>
))`
  color: whitesmoke;
  background-color: #21094e !important;
  opacity: 0.4 !important;
  z-index: 1000 !important;
`;
