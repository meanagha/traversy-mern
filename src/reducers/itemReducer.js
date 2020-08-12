import uuid from 'react-uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, LOADING_ITEMS } from '../actions/types';

const initialState = {
    items: [],
    loading: false

}
export default function (state = initialState, action) {
    switch (action.type) {

        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }


        case DELETE_ITEMS:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEMS:
            return {
                // ...state,
                items: [action.payload, ...state.items]
            }
        case LOADING_ITEMS:
            return {
                ...state,
                loading: true
            }
        default:
            return state;//this state will throw to rootReducer's "item" name Bcz itemReducer is mapped to "item"
    }
}