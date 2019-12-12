import { APPLY_SETTINGS } from './types';

export const applySettings = settings => dispatch => {
    dispatch({
        type: APPLY_SETTINGS,
        payload: settings
    });
}