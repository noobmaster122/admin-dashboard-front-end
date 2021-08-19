export const initialState={
    client: {
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
}

export function reducer(state, action){
    switch(action.type){
        case 'SAVECLIENTDATA':
            console.log(action.PAYLOAD)
            return {
                ...state,
                client: action.PAYLOAD
            };
        default:
            return state;
    }
}