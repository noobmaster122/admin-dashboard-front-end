import React, { useReducer,useEffect,  useContext, useState } from 'react';
import {Store} from './store';
import {reducer, initialState} from './storeReducer'
import ApplicationForm from './components/Form'
import StyledComponents from './components/styled.textfield'
import MenuToggler from './components/styled.btn.grp'
import {DatePickers} from './components/date.picker'
import {Btn} from './components/custom.btn'
import logo from './logo.svg';
import './App.css';
//components
import {Wrapper} from './components/wrapper.div'
import {SimpleBackdrop} from './components/custom.backdrop'
import ClientData from "./components/custom.table"
import {getClientsByStatus} from "./api/clientApi"
import {ModifyDelete} from "./screens/modify.delete"
import tst from './tst'

const waitFor = (delay) => new Promise(resolve => setTimeout(resolve, delay))
function App() {
  const [state, dispatch]= useReducer(reducer, initialState);
  const [activeComponent, setActiveComponent]= useState("Add");
  const [dataTable, setDataTable] = useState([])
  // backdrop
  const [open, setOpen] = useState(false);

  // get chosen menu item
  const handleMenuToggler = () => async(x) => {
    setOpen(true)
    // sleep to show the loader
    await waitFor(100)
    setOpen(false)
    setActiveComponent(x)
    let y = await getClientsByStatus(x);
    if(!!y) setDataTable(y);
    if(!!!y) setDataTable([])
  }

  useEffect(() => {
    console.log(dataTable)
  }, [dataTable]);

  return (
    <Wrapper 
     pgColor="linear-gradient(#f5f5f5 40%, #21094E 40%)"
     Yaligment="center"
     tpPadding="100px"
     pbtPadding="200px"
     >
      <Store.Provider value={{state, dispatch}}>
      <SimpleBackdrop open={open} />
        <MenuToggler handleItemChange={handleMenuToggler()} />
        <Wrapper 
        pgClr= "#eeeeee"
        bxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        brRad="5px"
        customPadding="15px"
        >
        {
          ((x)=>{
            switch(x){
              case "Add":
                return (<ApplicationForm />)
              break;
              case "Modify":
                return (<ModifyDelete />);
              break;
              case "Delete":
                return (<> </>);
              break;
              case "success":
                return (<ClientData dataTitle="success" objArr={dataTable}/>);
                break;
              case "pending":
                return (<ClientData dataTitle="pending" objArr={dataTable}/>);
              break;
              default:
                return (<ApplicationForm />);
              break;
            }
          })(activeComponent)
        }
        </Wrapper>
      </Store.Provider>
     
    </Wrapper>
  );
}

export default App;
