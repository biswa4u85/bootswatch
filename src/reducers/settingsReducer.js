import { APPLY_SETTINGS } from '../actions/types';

const initalState = {
    displayButtonInput: true,
    displayNotationInput: false,
    buttonStyle: 'Coming soon!'
}

export default function(state = initalState, action) {
    switch(action.type) {
        case APPLY_SETTINGS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
} 