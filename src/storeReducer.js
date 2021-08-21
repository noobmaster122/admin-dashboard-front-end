export const initialState={
    client: {
        id: null,
        data: {
            nationalite: 'Algerian',
            nom_de_famille: '',
            prenom:'',
            nmr_tlf:'',
            date_naissance: '',
            heure_rendez_vous: '',
            date_rendez_vous: '',
            type_passport: '',
            nmr_passport: '',
            date_emission: '',
            date_expiration: '',
            lieu_passport: '',
            type_visa: '',
        }
    },
    step: {
        modify: 0,
        delete: 0
    },
}

export function reducer(state, action){
    switch(action.type){
        case 'SAVECLIENTDATA':
            console.log(action.PAYLOAD)
            let x = action.PAYLOAD;
            if(x.application_status) delete x.application_status;
            console.log({...x})
            return {
                ...state,
                client: {
                    id: action.PAYLOAD.id,
                    data: action.PAYLOAD.data
                }
            };
        case 'UPDATEUI':
            console.log(`check this ${state.step.modify === 1 ? 0 : 1}`)
            return{
                ...state,
                step:{
                    ...state.step,
                    modify : state.step.modify === 1 ? 0 : 1
                }
            }
        case 'CLEARFIELDS':
            return{
                ...state,
                client: {
                    id: null,
                    data: initialState.client 
                }
            }
        default:
            return state;
    }
}