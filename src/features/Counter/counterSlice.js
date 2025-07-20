import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    type: 'idle',
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState
})

export const counterReducer = counterSlice.reducer
export const selectCount = state => state.counter.value
export const selectStatus = state => state.counter.status