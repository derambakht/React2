import {INCREASE_COUNTER, DECREASE_COUNTER, UPDATE_COUNTER} from './actionTypes'

export const increaseCounter = () => ({
    type: INCREASE_COUNTER,
});
// Decrease Counter
export const decreaseCounter = () => ({
    type: DECREASE_COUNTER,
});

// Update Counter
export const updateCounter = (count) => ({
    type: UPDATE_COUNTER,
    payload:count
});