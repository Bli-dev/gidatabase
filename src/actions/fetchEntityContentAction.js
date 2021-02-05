import axios from 'axios';
import {fetchEntityContentURL} from '../api';

export const fetchEntityContentAction = (entity) => async (dispatch) => {
    
    const getEntityContent = await axios.get(fetchEntityContentURL(entity));

    dispatch({
        type: 'ENTITY_CONTENT',
        payload: {
            selectedEntityName: entity,
            selectedEntityItems: getEntityContent.data,
            isItemActive: false,
            isEntityActive: true,
        }
    })
}