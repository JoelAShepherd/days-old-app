import { combineReducers } from 'redux'
import daysReducer from './Days/daysReducer'
import eventReducer from './Events/eventReducer'

const rootReducer = combineReducers({
    days: daysReducer,
    event: eventReducer
})

export default rootReducer