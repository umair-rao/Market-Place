import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { combineReducers } from 'redux';

const PRODCUCT_DETAIL = 'ProductList/ProductList/PRODCUCT_DETAIL';
const baseURL = 'https://fakestoreapi.com/products';

export const fetchProductDetail = createAsyncThunk(
    PRODCUCT_DETAIL,
  async (test,{ dispatch }) => {
    const response = await axios.get(`${baseURL}`);
    dispatch({ type: PRODCUCT_DETAIL, payload: response.data });
  },
);

const initialState = { productDetail: [] };

const fetchProductDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODCUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  products: fetchProductDetailReducer,
});

export default rootReducer;
