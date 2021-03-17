const initialState = {
    error: false
}

const errorHandlingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true
            }
        case 'NO_ERROR':
            return {
                ...state,
                error: false
            }
        default:
            return state;
    }
}

export default errorHandlingReducer;