import { 
    FETCH_CHARACTER_REQUEST,
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_FAILURE,
    SET_CHARACTER 
} from '../actions/types';

const initalState = {
    loading: false,
    name: '',
    movelist: []
}

export default function(state = initalState, action) {
    switch(action.type) {
        case FETCH_CHARACTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CHARACTER_SUCCESS:
            return {
                loading: false,
                name: action.payload.name,
                movelist: action.payload.movelist
            }
        case FETCH_CHARACTER_FAILURE:
            return {
                loading: false,
                name: 'Oops!',
                movelist: []
            }
        case SET_CHARACTER:
            return {
                ...state,
                name: action.payload.name,
                movelist: action.payload.movelist
            }
        default:
            return state;
    }
} 