import axios from 'axios';
import { baseURL } from '../api';


export const initiaEntitiesFetchAction = () => async (dispatch) => {
    
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "https://api.genshin.dev/";

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
