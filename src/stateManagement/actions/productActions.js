import {
  PRODUCT_ADD,
  PRODUCT_EDIT,
  PRODUCT_REMOVE,
  START_FETCH_PRODUCT,
  PRODUCT_GET,
  PRODUCT_GET_ALL,
  FINISH_FETCH_PRODUCT,
  ERROR_IN_FETCH_PRODUCT,
} from './actionTypes';

//Action Creators
export const addProduct = item => ({
  type: PRODUCT_ADD,
  payload: item,
});

export const editProduct = item => ({
  type: PRODUCT_EDIT,
  payload: item,
});

export const removeProduct = id => ({
  type: PRODUCT_REMOVE,
  payload: id,
});

export const getAllProduct = () => ({
  type: PRODUCT_GET_ALL,
});

export const getProduct = id => ({
  type: PRODUCT_GET,
  payload: id,
});

export const startFetchProduct = () => ({
  type: START_FETCH_PRODUCT,
});

// export const finishFetchProduct = data => ({
//   type: FINISH_FETCH_PRODUCT,
//   payload: data,
// });

export const errorInFetchProduct = () => ({
  type: ERROR_IN_FETCH_PRODUCT,
});

async function getUserAsync(name) {
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json();
  return data;
}

export const fetchProductWithAPI = async dispatch => {
  //is loading true
  dispatch(startFetchProduct());
  try {
    const apiUrl = 'http://apitester.ir/api/Products';
    let response = await fetch(apiUrl);
    let data = await response.json();
    //return dispatch(finishFetchProduct(data));
    return {
        type: FINISH_FETCH_PRODUCT,
        payload: data,
      };
  } catch {
    dispatch(errorInFetchProduct());
  }
};

// export const fetchProductWithAPI = dispatch => {
//     //is loading true
//     dispatch(startFetchProduct());
//     const apiUrl = 'http://apitester.ir/api/Products';
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(result => {
//         // dispatch(finishFetchProduct(result));
//         return {
//           type: FINISH_FETCH_PRODUCT,
//           payload: result,
//         };
//       })
//       .catch(error => {
//         dispatch(errorInFetchProduct());
//       });
//   };
