import {DAY_CHANGE} from './dayTypes'

const initState = {
    aDate: ''
}

const daysReducer = (state = initState, action) => {
    switch(action.type){
        case DAY_CHANGE:
            return{
                aDate: action.date
            }
        default:
            return state
    }
}

export default daysReducer