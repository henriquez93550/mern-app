// request to the backend
import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

// dispatch is used to use thunk
export const getItems = () => dispatch => {
   dispatch(setItemsLoading());
   // getting APIs from the backend
   axios.get('/api/items').then(res =>
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
     );
};
// returns new newItem from backend items.js

export const addItem = item => dispatch => {
    axios.post('/api/items', item )
    .then(res => dispatch({
        type: ADD_ITEM,
        payload: res.data // turns payload in to new item by bringing in data
    })
    )
};
// connects to router.delete from backend items.js
export const deleteItem = id => dispatch => {
    axios.delete(`/api/items/${id}`).then(res =>
         dispatch({
             type: DELETE_ITEM,
             payload: id

         })
    )
};



export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};