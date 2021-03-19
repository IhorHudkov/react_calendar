import restClient from '../models/client';
import {
    CREATE_EVENT,
    READ_EVENT,
    READ_EVENTS,
    UPDATE_EVENT,
    DELETE_EVENT,
    SHOW_LOADER,
    HIDE_LOADER
} from './types';

export const showLoader = () => ({
    type: SHOW_LOADER
})

export const hideLoader = () => ({
    type: HIDE_LOADER
})

export const createEvent = (event) => {
    return async (dispatch) => {
        dispatch(showLoader);
        try {
            await restClient.create('events', event);
            dispatch({
                type: CREATE_EVENT,
                payload: 'Event was successfully added to the database'
            })
            alert('Event was successfully added to the calendar');
            window.location.href = '/react_calendar';
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoader);
    }
}


// restClient.create('events', newEvent)
//     .then(
//         () => {
//             nameInput.value = '';
//             dayInput.value = 'Choose...';
//             timeInput.value = 'Choose...';
//             alert('Event was successfully added to the calendar');
//             window.location.href = '/react_calendar';
//         },
//         (error) => {
//             console.log(error.message);
//             const errHeader = document.querySelector('.error-msg');
//             errHeader.setAttribute('style', 'display: block;');
//         }
//     );

export const readEvent = (event) => ({
    type: READ_EVENT,
    payload: event
})

export const readEvents = (event) => ({
    type: READ_EVENTS,
    payload: event
})

export const updateEvent = (event) => ({
    type: UPDATE_EVENT,
    payload: event
})

export const deleteEvent = (event) => ({
    type: DELETE_EVENT,
    payload: event
})