
import {PRODUCT_ADD, PRODUCT_EDIT,
    PRODUCT_REMOVE,
     PRODUCT_GET,PRODUCT_GET_ALL, FINISH_FETCH_PRODUCT, ERROR_IN_FETCH_PRODUCT, START_FETCH_PRODUCT} from '../actions/actionTypes'

const initialState = {
    items: [
        // { id: 1, title: 'Test 1', price: 1500 },
        // { id: 2, title: 'Test 2', price: 2500 },
        // { id: 3, title: 'Test 3', price: 3500 },
    ],
    selectedItem: {id: '', title: '', price: ''},
    isLoading: true,
    error:false,
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCH_PRODUCT: return {
            ...state,
            items: [],
            isLoading:true,
            error:false,
        };
        case "FINISH_FETCH_PRODUCT":  return {
            ...state,
            items: action.payload,
            isLoading:false
        };
        case "ERROR_IN_FETCH_PRODUCT":  return {
            ...state,
            items: [],
            isLoading:false,
            error:true
        };
        case "PRODUCT_ADD":
            return {
                ...state,
                items: state.items.concat([action.payload]),
            };
        case "PRODUCT_EDIT": {
            const index = state.items.findIndex(q => q.id == action.payload.id);
            let temp = state.items;
            temp[index] = action.payload;
            return {
                ...state,
                items: temp
            };
        }
        case "PRODUCT_REMOVE": {
            return {
                ...state,
                items: state.items.filter(q => q.id != action.payload)
            }
        }
        case "PRODUCT_GET_ALL": {
            return {
                ...state,
                isLoading: false
            }
        }
        case "PRODUCT_GET": {
            return {
                ...state,
                selectedItem: state.items.find(q => q.id == action.payload)
            }
        }
        default:
            return state;
    }
}

export default productReducer;