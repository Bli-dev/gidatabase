const initialState = {}

const initialEntitiesFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_FETCH':
            return {
                ...state,
                entities: action.payload.data.types
            }
        case 'ENTITY_LIST':
                return {
                    ...state,
                    activeEntity: action.payload.data
                }
        
        default:
            return state;
    }
}

export default initialEntitiesFetchReducer;