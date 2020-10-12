import {FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE} from './eventTypes'

const initState = {
    loading: true,
    event: '',
    error: ''
}

const eventReducer = (state = initState, action) =>{
    switch(action.type){
        case FETCH_EVENT_REQUEST:
            return{
                ...state, 
                loading: true
            }
        case FETCH_EVENT_SUCCESS:
            return{
                loading: false,
                event: action.payload,
                error: ''
            }
        case FETCH_EVENT_FAILURE:
            return {
                loading: false,
                event: '',
                error: action.payload
            }
        default: return state
    }
}

export default eventReducer