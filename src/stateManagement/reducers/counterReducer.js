
import {INCREASE_COUNTER,DECREASE_COUNTER,UPDATE_COUNTER} from '../actions/actionTypes'

// Initial State
const initialState = {
    counter: 50,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        // Increase Counter
        case INCREASE_COUNTER: {
            return {
                // State
                ...state,
                // Redux Store
                counter: state.counter + 1,
            }
        }
        // Decrease Counter
        case DECREASE_COUNTER: {
            return {
                // State
                ...state,
                // Redux Store
                counter: state.counter - 1,
            }
        }
         // Update Counter
         case UPDATE_COUNTER: {
            return {
                // State
                ...state,
                // Redux Store
                counter: state.counter + action.payload,
            }
        }
        // Default
        default: {
            return state;
        }
    }
};
// Exports
export default counterReducer;