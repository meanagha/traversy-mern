import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, LOADING_ITEMS } from './types';
import uuid from 'react-uuid';
import axios from 'axios';

export const getItems = () => dispatch => {
    // return {
    //     type: GET_ITEMS
    // }
    dispatch(loadingItems());
    axios
        .get("/api")
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )

};
export const deleteItem = (id) => dispatch => {
    // return {
    //     type: DELETE_ITEMS,
    //     payload: id

    // }

    axios
        .delete(`/api/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ITEMS,
                payload: id
            })
        )
}
export const insertItem = (item) => dispatch => {
    // const name = prompt("Enter Name")
    // return {
    //     type: ADD_ITEMS,
    //     payload: name

    // }
    //alert(item);
    axios.post("/api", item)
        .then(res =>
            dispatch({
                type: ADD_ITEMS,
                payload: res.data
            })
        )
}
export const loadingItems = () => {
    return {
        type: LOADING_ITEMS
    }
}