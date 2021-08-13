import { useReducer, useContext } from 'react';
import {Store} from './store';
import {reducer, initialState} from './storeReducer'
import WithMaterialUI from './components/Form'
import StyledComponents from './components/styled.textfield'
import MenuToggler from './components/styled.btn.grp'
import {DatePickers} from './components/date.picker'
import {Btn} from './components/custom.btn'
import logo from './logo.svg';
import './App.css';
//components
import {Wrapper} from './components/wrapper.div'
import tst from './tst'




function App() {
  const [state, dispatch]= useReducer(reducer, initialState);

  return (
    <Wrapper 
    
     pgColor="linear-gradient(#f5f5f5 40%, #21094E 40%)"
     Yaligment="center"
     tpPadding="100px"
     pbtPadding="200px"
     >

      <Store.Provider value={{state, dispatch}}>
        <MenuToggler />
        <Wrapper 
        pgClr= "#eeeeee"
        bxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        brRad="5px"
        customPadding="15px"
        customWidth="325px">

        <WithMaterialUI />
         </Wrapper>
      </Store.Provider>
     
    </Wrapper>
  );
}

export default App;
