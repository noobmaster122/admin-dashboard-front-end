import Axios from "axios";

export const setApplication = (obj) => {
    return new Promise((resolve,reject)=>{
        try{
            Axios.post(`http://localhost:5001/api/v1/client/`,{
                ...obj
            })
            .then(res => {
            console.log(res)
            resolve(res)})
            .catch(e => reject(e))
        }catch(err){
            resolve(false)
        }
    })
}

export const isReservationDateOpen = (d, t) => {
    return new Promise((resolve)=>{
        try{
            Axios.get(`http://localhost:5001/api/v1/client/is-date-open?date=${d}&time=${t}`)
            .then(res => {
              if(res.data.length > 0) resolve(false);
              resolve(true);
            })
            .catch(e =>{
              resolve(false)
            })
        }catch(e){
            resolve(false)
        }
    })
}

export const getClients = () => {
    return new Promise((resolve)=>{
        try{
            Axios.get(`http://localhost:5001/api/v1/client/`)
            .then(res => {
              resolve(res.data);
            })
            .catch(e =>{
              resolve(false)
            })
        }catch(e){
            resolve(false)
        }
    })
}

export const getClientsByStatus = (x) => {
    return new Promise((resolve)=>{
        try{
            Axios.get(`http://localhost:5001/api/v1/client/data?status="${x}"`)
            .then(res => {
              resolve(res.data);
            })
            .catch(e =>{
              resolve(false)
            })
        }catch(e){
            resolve(false)
        }
    })
}

export const getClientsIdNom = (option) => {
    return new Promise((resolve)=>{
        try{
            Axios.get(`http://localhost:5001/api/v1/client/data?option="${option}"`)
            .then(res => {
              resolve(res.data);
            })
            .catch(e =>{
              resolve(false)
            })
        }catch(e){
            resolve(false)
        }
    })
}

export const getClientByIdNom = (obj) => {
    return new Promise((resolve)=>{
        try{
            Axios.post(`http://localhost:5001/api/v1/client/data`,{
                ...obj
            })
            .then(res => {
              resolve(res.data);
            })
            .catch(e =>{
              resolve(false)
            })
        }catch(e){
            resolve(false)
        }
    })
}

export const ModifyClientById = (id, obj) => {
    return new Promise((resolve)=>{
        try{
            Axios.post(`http://localhost:5001/api/v1/client/${id}`,{
                ...obj
            })
            .then(res => {
              resolve(res.data);
            })
            .catch(e =>{
              resolve(false)
            })
        }catch(e){
            resolve(false)
        }
    });
}