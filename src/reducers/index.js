import { combineReducers } from 'redux';
import initialEntitiesFetchReducer from './initialEntetiesFetchReducer';
import dataFetchReducer from './dataFetchReducer';

const rootReducer = combineReducers({
    initialEntities: initialEntitiesFetchReducer,
    currentActiveData: dataFetchReducer
})

export default rootReducer;