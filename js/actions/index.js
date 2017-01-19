//https://github.com/oampo/redux-hot-cold/blob/fa082dc8d784eb71f8fb87d51f6a1605e9cf72c9/js/actions.js

//User selects to start a new game.

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

