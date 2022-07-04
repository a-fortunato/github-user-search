/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from './actions'

const initialState = {
  isFetching: false,
  users: [],
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.isFetching = false
    })
    .addCase(fetchUsers.pending, (state) => {
      state.isFetching = true
    })
    .addCase(fetchUsers.rejected, (state) => {
      state.isFetching = false
    })
  ,
})

export default searchSlice.reducer
