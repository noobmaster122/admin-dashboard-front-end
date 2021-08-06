import { useReducer, useContext } from 'react';
import {Store} from './store';
import {reducer, initialState} from './storeReducer'
import WithMaterialUI from './components/Form'
import logo from './logo.svg';
import {SignupForm} from './tst2.js';
import {Formik} from './formik.example'
import './App.css';

function App() {
  const [state, dispatch]= useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <SignupForm /> */}
      <Store.Provider value={{state, dispatch}}>
        <SignupForm Frk="farouk"/>
        <WithMaterialUI />
      </Store.Provider>
    </div>
  );
}

export default App;
