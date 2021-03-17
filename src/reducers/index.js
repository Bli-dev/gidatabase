import { combineReducers } from 'redux';
import initialEntitiesFetchReducer from './initialEntetiesFetchReducer';
import dataFetchReducer from './dataFetchReducer';
import errorHandlingReducer from './errorHandlingReducer';

const rootReducer = combineReducers({
    initialEntities: initialEntitiesFetchReducer,
    currentActiveData: dataFetchReducer,
    error: errorHandlingReducer
})

export default rootReducer;