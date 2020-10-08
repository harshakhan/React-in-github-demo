import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import reducer from './reducer'
//import authReducer from "./authReducer"
import thunk from "redux-thunk"

// const rootReducer = combineReducers({ app: reducer, auth: authReducer })

const logger = () => next => action => {
    return next(action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer,
    composeEnhancers(applyMiddleware(logger,thunk))
)


