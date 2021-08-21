import React,{useContext, useEffect} from "react"
import {SearchBlock} from "../container/lookup.client"
import {Store} from '../store'
import ApplicationForm from "../components/Form"

export const ModifyDelete = (props) =>{
    const {state, dispatch} = useContext(Store);
    useEffect(() => {
        console.log(state)
    }, []);

    return(
        <>
        {
            ((x)=>{
                console.log("step " + state.step.modify)
                switch(x){
                    case 0:
                        return (<SearchBlock />);
                    case 1:
                        return (<ApplicationForm screen={props.screen}/>);
                    default:
                        return (<ApplicationForm screen={props.screen}/>); 
                }
            })(state.step.modify)
        }
        </>
    );
}