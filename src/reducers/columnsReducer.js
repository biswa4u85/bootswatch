import { SET_COLUMNS } from '../actions/types';

const initalState = {
    columns: [
        { id: 0, header: 'Command', visible: true },
        { id: 1, header: 'Speed', visible: true },
        { id: 2, header: 'On Block', visible: true },
        { id: 3, header: 'On Hit', visible: true },
        { id: 4, header: 'On Counter', visible: true },
        { id: 5, header: 'Hit', visible: true },
        { id: 6, header: 'Damage', visible: true },
        { id: 7, header: 'Notes', visible: true }
    ],
}

export default function (state = initalState, action) {
    switch (action.type) {
        case SET_COLUMNS:
            return {
                ...state,
                columns: action.payload
            }
        default:
            return state;
    }
} 