export const resetEntityAction = (dispatch) => {
    dispatch({
        type: 'ENTITY_INACTIVE',
        payload: {
            isEntityActive: false,
        }
    })
}