import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import daysReducer from './Redux/daysReducer'

const store = createStore(daysReducer, composeWithDevTools(applyMiddleware(logger)))

export default store
