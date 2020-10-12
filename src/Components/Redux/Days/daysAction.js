import {DAY_CHANGE} from './dayTypes'

export const dayChange = (newDate) =>{
    return{
        type: DAY_CHANGE,
        date: newDate
    }
}