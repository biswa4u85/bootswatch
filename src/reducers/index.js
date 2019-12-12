import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import filterReducer from './filterReducer';
import columnsReducer from './columnsReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
    character: characterReducer,
    filters: filterReducer,
    columns: columnsReducer,
    settings: settingsReducer
});