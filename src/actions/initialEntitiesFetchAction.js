import axios from 'axios';
import { baseURL } from '../api';


export const initiaEntitiesFetchAction = () => async (dispatch) => {
    try {
        const getEntities = await axios.get(baseURL);
        dispatch({
            type: 'INITIAL_FETCH',
            payload: getEntities
        })
    } catch {
        dispatch({ type: 'ERROR' })
    }
}
