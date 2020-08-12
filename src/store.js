import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk';

const initialState = {};//this is state like component constructore state which I am declaring here in store

const middleware = [thunk]; //this is nothing but array of middleware.I have taken only "thunk" middleware

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;