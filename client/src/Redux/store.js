import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Loader from './reducers/LoaderReducer'

import ErrorReducer from './reducers/errReducer'
import userReducer from './reducers/userReducer'

import templateReducer from './reducers/templateReducer'





const reducer = combineReducers({
    Loader: Loader,
  
    err:ErrorReducer,
    users:userReducer,

    templates:templateReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store