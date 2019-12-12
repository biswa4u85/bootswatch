import { APPLY_COMMAND_FILTER, APPLY_FILTERS } from '../actions/types';

const initalState = {
    commandFilterValue: '',
    speedMin: null,
    speedMax: null,
    onBlockMin: null,
    onBlockMax: null,
    onHitMin: null,
    onHitMax: null,
    onCounterValue: null,
    notesValue: null
}

export default function (state = initalState, action) {
    switch (action.type) {
        case APPLY_COMMAND_FILTER:
            return {
                ...state,
                commandFilterValue: action.payload
            }
        case APPLY_FILTERS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}