/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { fetchUserById, fetchUserFollowers, fetchUserRepos } from './actions'

const initialState: UserState = {
  fetchingDetails: false,
  details: null,
  fetchingRepos: false,
  repos: [],
  fetchingFollowers: false,
  followers: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchUserById.fulfilled, (state, action) => {
      state.details = action.payload
      state.fetchingDetails = false
    })
    .addCase(fetchUserById.pending, (state) => {
      state.fetchingDetails = true
    })
    .addCase(fetchUserById.rejected, (state) => {
      state.fetchingDetails = false
    })
    .addCase(fetchUserRepos.fulfilled, (state, action) => {
      state.repos = action.payload
      state.fetchingRepos = false
    })
    .addCase(fetchUserRepos.pending, (state) => {
      state.fetchingRepos = true
    })
    .addCase(fetchUserRepos.rejected, (state) => {
      state.fetchingRepos = false
    })
    .addCase(fetchUserFollowers.fulfilled, (state, action) => {
      state.followers = action.payload
      state.fetchingFollowers = false
    })
    .addCase(fetchUserFollowers.pending, (state) => {
      state.fetchingFollowers = true
    })
    .addCase(fetchUserFollowers.rejected, (state) => {
      state.fetchingFollowers = false
    }),
})

export default userSlice.reducer
