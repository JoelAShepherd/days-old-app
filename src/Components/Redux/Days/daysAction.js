import {DAY_CHANGE} from './dayTypes'

export const dayChange = (date) =>{
    return{
        type: DAY_CHANGE,
        aDate: date
    }
}