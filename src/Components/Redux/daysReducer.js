import {DAY_CHANGE} from './dayTypes'

const initState = ''

const daysReducer = (state = initState, action) => {
    switch(action.type){
        case DAY_CHANGE:
            return{
                ...state, aDate: action.aDate
            }
        default:
            return state
    }
}

export default daysReducer