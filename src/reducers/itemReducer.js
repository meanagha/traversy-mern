import uuid from 'react-uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';

const initialState = {
    items: [
        {
            id: uuid(),
            name: "Eggs"
        },
        {
            id: uuid(),
            name: "Milk"
        },
        {
            id: uuid(),
            name: "Bread"
        },
        {
            id: uuid(),
            name: "Water"
        },
    ]

}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        case DELETE_ITEMS:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case ADD_ITEMS:
            return {
                // ...state,
                items: [...state.items, { id: uuid(), name: action.payload }]
            }
        default:
            return state;//this state will throw to rootReducer's "item" name Bcz itemReducer is mapped to "item"
    }
}