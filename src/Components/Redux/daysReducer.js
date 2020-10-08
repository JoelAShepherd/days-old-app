import {DAY_CHANGE} from './dayTypes'

const initState = ''

const daysReducer = (state = initState, action) => {
    switch(action.type){
        case DAY_CHANGE:
            return{
                aDate: action.aDate
            }
        default:
            return state
    }
}

export default daysReducer