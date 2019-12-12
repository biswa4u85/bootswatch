import { 
    FETCH_CHARACTER_REQUEST,
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_FAILURE
} from './types';

const importCharacterData = async (characterUrl) => {
    const data = await import(`../data/${characterUrl}.json`);
    return data;
}

const fetchCharacterRequest = () => {
    return {
        type: FETCH_CHARACTER_REQUEST
    };
}

const fetchCharacterSuccess = character => {
    return {
        type: FETCH_CHARACTER_SUCCESS,
        payload: character
    };
}

const fetchCharacterFailure = error => {
    return {
        type: FETCH_CHARACTER_FAILURE,
        payload: error
    };
}

export const fetchCharacter = characterUrl => {
    return function (dispatch) {
        dispatch(fetchCharacterRequest())
        importCharacterData(characterUrl)
            .then(response => {
                dispatch(fetchCharacterSuccess(response));
            })
            .catch(error => {
                dispatch(fetchCharacterFailure(error));
            });
    }
}