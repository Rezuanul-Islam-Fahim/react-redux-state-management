import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    type: 'idle',
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState
})

export default counterSlice.reducer