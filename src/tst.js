import * as yup from 'yup';
import Axios from 'axios'

let schemaa = yup.object({
  heure_rendez_vous : yup
  .string("enter time")
  .required("field is required"),
  date_rendez_vous: yup
  .string('enter valid date')
  .required('field is required')
  .test(
    'validdate',
    'date been already chosen by another client',
    function(item){
      console.log(item)
      console.log(this.options);
      return new Promise(async(resolve)=>{
        let d = JSON.stringify(this.options.parent.date_rendez_vous)
        let t = JSON.stringify(this.options.parent.heure_rendez_vous)
          Axios.get(`http://localhost:5001/api/v1/client/is-date-open?date=${d}&time=${t}`)
          .then(res => {
            if(res.data.length > 0) resolve(false);
            resolve(true);
          })
          .catch(e =>{
            console.log(e)
            resolve(true)
          })
      })
    }
  )
});

export default async function tst() {
  return schemaa.validate({ heure_rendez_vous: "08:00-09:00", date_rendez_vous: "2021-03-06" }, {context: schemaa});
}
