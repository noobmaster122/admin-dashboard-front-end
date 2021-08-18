import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {fieldKeyFormater} from "../api/keys.formatter"
import styled from 'styled-components';
import {Wrapper} from "./wrapper.div"
import {CustomTitle} from "./custom.title"
import {ErrorDiv} from "./not.found.error"

export const CustomTable = styled(({children, ...props}) => (
  <Table {...props}>
    {children}
  </Table>
))`
  width: 900px !important;
  max-width: 900px !important;
  @media (max-width: 768px) {
    width: 600px !important;
    max-width: 600px !important;
  }
  @media (max-width: 425px) {
    width: 200px !important;
    max-width: 200px !important;
  }
`;


export const CustomTableCell = styled(({children, ...props})=> (
  <TableCell {...props}>
    {children}
  </TableCell>
))`
  color: ${props => props.fontClr};
  background-color: ${props =>  props.backgroundClr};
  border-radius: ${props => props.customRad};
`;

export const CustomTableBody = styled(({children, ...props})=> (
  <TableBody {...props}>
    {children}
  </TableBody>
))`
  max-width: 900px;
  @media (max-width: 768px) {
    width: 600px !important;
    max-width: 600px !important;
  }
  @media (max-width: 425px) {
    width: 200px !important;
    max-width: 200px !important;
  }
`;

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow >
        {/* row headers */}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="left">{row.nom_de_famille}</TableCell>
        <TableCell align="left">
          {JSON.parse(row.application_status).status}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, maxWidth: '250px ' }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Données du client
              </Typography>
              {/* inner table */}
              <CustomTable aria-label="purchases">
                {/* inner table haeder */}
                <TableHead>
                  <TableRow>
                    <TableCell>Champ</TableCell>
                    <TableCell>donnée</TableCell>
                  </TableRow>
                </TableHead>
                {/* inner table body */}
                <CustomTableBody>
                  {Object.keys(row)?.map(key => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {fieldKeyFormater(key)}
                      </TableCell>
                      <TableCell>{row[key]}</TableCell>
                    </TableRow>
                  ))}
                </CustomTableBody>
              </CustomTable>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

 function DataTable(props) {
   console.log(props.data)
  return (
    <TableContainer >
      <CustomTable aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <CustomTableCell backgroundClr="#21094E" fontClr="whitesmoke !important" customRad="10px 0 0 0" />
            <CustomTableCell backgroundClr="#21094E" fontClr="whitesmoke !important">Id</CustomTableCell>
            <CustomTableCell  backgroundClr="#21094E" fontClr="whitesmoke !important">Nom</CustomTableCell>
            <CustomTableCell  backgroundClr="#21094E" fontClr="whitesmoke !important" customRad="0 10px 0 0">Etat</CustomTableCell>
          </TableRow>
        </TableHead>
        <CustomTableBody>
          {props.data?.map(row => (
            <Row key={row.id} row={row} />
          ))}
        </CustomTableBody>
      </CustomTable>
    </TableContainer>
  );
}

export default function ClientData({...props}){
  return(
    <Wrapper>
      <CustomTitle>{props.dataTitle}</CustomTitle>
      {!!props.objArr.length > 0 && (<DataTable data={props.objArr}/>)}
      {(!!props.objArr.length == 0) && (<ErrorDiv />)}
    </Wrapper>
  );
}
