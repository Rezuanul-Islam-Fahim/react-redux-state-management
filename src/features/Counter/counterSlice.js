import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterApi';

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
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const counterReducer = counterSlice.reducer;
export const selectCount = (state) => state.counter.value;
export const selectStatus = (state) => state.counter.status;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const increaseIfOdd = (amount) => {
  return (dispatch, getState) => {
    const currentVal = selectCount(getState());

    if (currentVal % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);
