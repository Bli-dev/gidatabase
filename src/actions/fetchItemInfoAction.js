import axios from 'axios';
import { fetchItemInfoURL } from '../api'

export const fetchItemInfoAction = (entity, item) => async (dispatch) => {
    
    dispatch({
        type: 'NO_ERROR'
    });
    
    try {
        const getItemInfo = await axios.get(fetchItemInfoURL(entity, item));

        dispatch({
            type: 'ITEM_INFO',
            payload: {
                selectedItemName: item,
                selectedItemData: getItemInfo.data,
                isItemActive: true,
                isEntityActive: false
            }
        })
    } catch {
        dispatch({ type: 'ERROR' })
    }
        
}