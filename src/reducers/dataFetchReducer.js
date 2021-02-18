const initialState = {
    isEntityActive: false,
    isItemActive: false
}

const dataFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ENTITY_CONTENT':
            return {
                ...state,
                selectedEntityName: action.payload.selectedEntityName,
                selectedEntityItems: action.payload.selectedEntityItems,
                isEntityActive: action.payload.isEntityActive,
                isItemActive: action.isItemActive
            }
        case 'ENTITY_INACTIVE':
            return {
                ...state,
                isEntityActive: action.payload.isEntityActive
            }
        case 'ITEM_INFO':
            return {
                ...state,
                selectedItemName: action.payload.selectedItemName,
                selectedItemData: action.payload.selectedItemData,
                isEntityActive: action.payload.isEntityActive,
                isItemActive: action.payload.isItemActive
            }
        default:
            return state;
    }
}

export default dataFetchReducer;  