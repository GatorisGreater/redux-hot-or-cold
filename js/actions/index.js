//https://github.com/oampo/redux-hot-cold/blob/fa082dc8d784eb71f8fb87d51f6a1605e9cf72c9/js/actions.js

//User selects to start a new game.
import 'isomorphic-fetch';


export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
	type: RESTART_GAME
});

//User guesses a number.
export const USER_GUESS = 'USER_GUESS';
export const userGuess = (entry) => ({
	type: USER_GUESS,
	entry
});

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = (fewestGuess) => ({
    type: FETCH_SUCCESS,
    fewestGuess,
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = (fewestGuess, error) => ({
    type: FETCH_ERROR,
    fewestGuess,
    error
});

export const fetchFewestGuesses = fewestGuess => dispatch => {
    const url = `http://localhost:8081/fewest-guesses`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data =>
        dispatch(fetchSuccess(data))
    )
    .catch(error =>
        dispatch(fetchError(data, error))
    );
};