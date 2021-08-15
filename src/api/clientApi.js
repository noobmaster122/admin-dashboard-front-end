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
            reject(err)
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

        }
    })
}