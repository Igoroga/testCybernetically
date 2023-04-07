import { configureStore } from '@reduxjs/toolkit';
import { reducer as stocksReducer } from './reduser';

const store = configureStore({
  reducer: {
    stocks: stocksReducer,
  },
});

export default store;