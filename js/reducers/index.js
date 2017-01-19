// https://github.com/oampo/redux-hot-cold/blob/fa082dc8d784eb71f8fb87d51f6a1605e9cf72c9/js/reducer.js

import * as actions from '../actions/index';

const initialHotOrColdState = {
    guessHistory: [],
    feedback: 'Make Your Guess!',
    randomNumber: Math.floor(Math.random()*100)
};

export const hotOrColdReducer = (state=initialHotOrColdState, action) => {
    if (action.type === actions.RESTART_GAME) {
        console.log("reducer success");
        return initialHotOrColdState;
    }
    else if (action.type === actions.USER_GUESS) {
    let guess = parseInt(action.entry, 10);
        if (isNaN(guess)) {
            state = Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });
            return state;
        }

        let difference = Math.abs(guess - state.randomNumber);

        let feedback;
        if (difference >= 50) {
            feedback = 'Ice Ice Baby...Too Cold';
        }
        else if (difference >= 30) {
            feedback = 'Ice Ice Baby...';
        }
        else if (difference >= 10) {
            feedback = 'It\'s getting hot in here...';
        }
        else if (difference >= 1) {
            feedback = 'I\'m gonna take my clothes off!';
        }
        else {
            feedback = 'You got it!';
        }

        state = Object.assign({}, state, {
            feedback: feedback,
            guessHistory: state.guessHistory.concat(action.entry)
        });

        return state;
    }
 /*   else if (action.type === actions.USER_GUESS) {
        // Take value from user input field
        const index = state.findIndex(repository =>
            repository.name === action.repository
        );

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        const before = state.slice(0, index);
        const after = state.slice(index + 1);
        const newRepository = Object.assign({}, state[index], {rating: action.rating});
        return [...before, newRepository, ...after];
    }*/
    return state;
};