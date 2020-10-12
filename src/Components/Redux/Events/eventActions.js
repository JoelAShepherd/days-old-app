import {FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE} from './eventTypes'

export const fetchEventRequest = () => {
    return {
        type: FETCH_EVENT_REQUEST
    }
}

export const fetchEventSuccess = (eventText) => {
    return {
        type: FETCH_EVENT_SUCCESS,
        payload: eventText
    } 
}

export const fetchEventFailure = (errorMsg) => {
    return {
        type: FETCH_EVENT_FAILURE,
        payload: errorMsg
    }
}
