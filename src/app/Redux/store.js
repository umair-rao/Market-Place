
import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer from './FetchProducts';

export const store = configureStore({
  reducer: {
    products: rootReducer,
  },
});

export default store;
