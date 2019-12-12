import { APPLY_COMMAND_FILTER, APPLY_FILTERS } from './types';

export const applyCommandFilter = commandFilterValue => dispatch => {
    dispatch({
        type: APPLY_COMMAND_FILTER,
        payload: commandFilterValue
    });
}

export const applyFilters = filters => dispatch => {
    dispatch({
        type: APPLY_FILTERS,
        payload: filters
    });
}