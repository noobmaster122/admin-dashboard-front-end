import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ListSubheader from '@material-ui/core/ListSubheader';
import styled from "styled-components";


export const StyledMenuItem = styled(({children, ...props})=>(
    <MenuItem {...props}>{children}</MenuItem>
))`
    
`;

export const StyledListHeader = styled(({children, ...props})=>(
    <ListSubheader {...props}>{children}</ListSubheader>
))`
    
`;

export const StyledSandwichMenu = styled(({...props})=>(
    <MenuIcon {...props}/>
))`
    
`;

export const StyledBtn = styled(({children, ...props})=>(
    <Button {...props}>
        {children}
    </Button>
))`
background-color: rgba(0, 0, 0, 0.05);
    diplay: block;
    background-color: invisible;
    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
    }

`;

export const MenuWrapper = styled(({children, ...props})=>(
    <div {...props}>
        {children}
    </div>
))`
    width: 100px;
    height: 100px;
`;

export default function MenuToggler() {

  const [currItem, setCurrItem] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const menuItemsObj ={
      'list' : ["success", "pending"],
      'application': ["Add", "Modify", "Delete"]
  }

  const handleChange = (event) => {
    setCurrItem(event.target.value);
    console.log(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <MenuWrapper>
      <StyledBtn onClick={handleOpen}>
        <StyledSandwichMenu />
      </StyledBtn>
      <FormControl>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={currItem}
          onChange={handleChange}
          style={{
              border: '1px solid green',
              visibility: "hidden"
          }}
        >
          {
              (()=>{
                  let itemsComponents=[];
                 Object.keys(menuItemsObj)?.forEach(key => {
                    itemsComponents.push(
                      <StyledListHeader>{key}</StyledListHeader> 
                    );       
                    menuItemsObj[key]?.forEach(item => {
                        itemsComponents.push(
                            <StyledMenuItem value={item}>{item}</StyledMenuItem>
                          );
                    })             
                })
                return itemsComponents;
              })()
          }
        </Select>
      </FormControl>
    </MenuWrapper>
  );
}
