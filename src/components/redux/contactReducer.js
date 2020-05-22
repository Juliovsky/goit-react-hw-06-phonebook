import {Type} from './contactActions'
import {getFilterValue,addContact,deleteItem} from './contactActions'


const initialState = {
    contacts: [],
    filter: ''
}

const contactReducer = (state = {...initialState},
                        {type, payload}) => {
    switch (type) {
        case getFilterValue.type:
            return ({...state,filter: payload})
        case addContact.type:
            return ({...state,contacts: [...state.contacts,payload]})
        case deleteItem.type:
            return ({...state, contacts:[...state.contacts.filter((contact) => contact.id!== payload)]})
        default:
            return state;
    }
}
export default contactReducer;