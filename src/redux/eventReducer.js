const initialState = {};

export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EVENT/CREATE_EVENT':
            return { ...state, events: action.payload }
        case 'EVENT/READ_EVENT':
            return { ...state, events: action.payload }
        case 'EVENT/READ_EVENTS':
            return { ...state, events: action.payload }
        case 'EVENT/UPDATE_EVENT':
            return { ...state, events: action.payload }
        case 'EVENT/DELETE_EVENT':
            return { ...state, events: action.payload }
        default:
            return state;
    }
}
