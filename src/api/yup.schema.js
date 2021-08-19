import * as yup from 'yup';
import {isReservationDateOpen} from "./clientApi"

export const Schema = yup.object({
    nationalite: yup
    .string("Enter nationality")
    .required("field is required"),
    nom_de_famille: yup
    .string("Enter familly name")
    .required("field is required"),
    prenom: yup
    .string('Enter name')
    .required('field is required'),
    nmr_tlf: yup
    .string("Enter phone number")
    .required("field is required")
    .test('len', 'phone number must have 10 digits', function(val){ return !!val ? val.length === 10 : false; })
    .test('Digits only', 'The field should have digits only', function(value){ return /^\d+$/.test(value)}),
    date_naissance: yup
    .string("Enter birthday date")
    .required("field is required")
    .test('len', 'date format error', function(val){ return !!val ? val.length === 10 : false; }),
    date_rendez_vous: yup
    .string("Enter reservation date")
    .required("field is required")
    .test('len', 'date format error', function(val){ return !!val ? val.length === 10 : false; }),
    heure_rendez_vous : yup
    .string("enter time")
    .required("field is required")
    .test('validdate',
      'date been already chosen by another client',
      function(){
        return new Promise(async(resolve)=>{
          let d = JSON.stringify(this.options.parent.date_rendez_vous)
          let t = JSON.stringify(this.options.parent.heure_rendez_vous)
          if(!!d && !!t){
            let x = await isReservationDateOpen(d, t);
            resolve(x)
          }
        })
      }
    ),
    type_passport: yup
    .string("Enter passport type")
    .required("field is required"),
    nmr_passport: yup
    .string("Enter passport number")
    .required("field is required"),
    date_emission: yup
    .string("Enter passport emission date")
    .required("field is required")
    .test('len', 'date format error', function(val){ return !!val ? val.length === 10 : false; }),
    date_expiration: yup
    .string("Enter passport emission date")
    .required("field is required")
    .test('len', 'date format error', function(val){ return !!val ? val.length === 10 : false; }),
    lieu_passport: yup
    .string("Enter passport emission state")
    .required("field is required"),
    type_visa: yup
    .string("Enter passport visa type")
    .required("field is required")
  });
  