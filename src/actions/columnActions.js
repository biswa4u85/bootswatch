import { SET_COLUMNS } from './types';

export const setColumns = columns => dispatch => {
    dispatch({
        type: SET_COLUMNS,
        payload: columns
    });
}