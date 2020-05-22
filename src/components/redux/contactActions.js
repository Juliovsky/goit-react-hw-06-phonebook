import {createAction} from '@reduxjs/toolkit';

export const Type = {
    FILTERLIST: 'FILTERLIST',
    GETFILTERVALUE: 'GETFILTERVALUE',
    ADDCONTACT: 'ADDCONTACT',
    DELETEITEM: 'DELETEITEM'
}


export const getFilterValue = createAction('GETFILTERVALUE');
//
export const addContact = createAction('ADDCONTACT');
//
export const deleteItem = createAction('DELETEITEM');

//
// export const getFilterValue = createAction('GETFILTERVALUE', value => ({
//     payload: {
//         value
//     }
// }));

// export const addContact = createAction('ADDCONTACT', newContact => ({
//     payload: {
//         newContact
//     }
//     }));

// export const getFilterValue = (value) => ({
//     type: Type.GETFILTERVALUE,
//     payload: value
// })

//
// export const addContact = (newContact) => ({
//     type: Type.ADDCONTACT,
//     payload: newContact
// })


// export const deleteItem = (id) => ({
//     type: Type.DELETEITEM,
//     payload: id
// })