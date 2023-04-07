import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // начальное состояние
};

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    // здесь вы можете определить ваши actions и reducers
  },
});

export const { actions, reducer } = stocksSlice;