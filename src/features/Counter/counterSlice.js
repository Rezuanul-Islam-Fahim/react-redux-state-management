import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'idle',
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const selectCount = (state) => state.counter.value;
export const selectStatus = (state) => state.counter.status;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
