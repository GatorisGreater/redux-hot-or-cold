// https://github.com/oampo/redux-hot-cold/blob/fa082dc8d784eb71f8fb87d51f6a1605e9cf72c9/js/reducer.js

import * as actions from '../actions/index';

const initialHotOrColdState = {
    guessHistory: [],
    feedback: 'Make Your Guess!',
    randomNumber: Math.floor(Math.random()*100),
    fewestGuesses: 10
};

export const hotOrColdReducer = (state=initialHotOrColdState, action) => {
    if (action.type === actions.RESTART_GAME) {
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
    else if (action.type === actions.FETCH_SUCCESS) {
        console.log("reducer fetch success");
        let fewestGuessNode = action.fewestGuess;
        console.log(fewestGuessNode);
        console.log(state.fewestGuesses);
        if (state.fewestGuess > fewestGuessNode) {
            state = Object.assign({}, state, {
            fewestGuesses: fewestGuessNode
            });
            return state;          
        } 
        else {
            return state;
        }

    }
    return state;
};