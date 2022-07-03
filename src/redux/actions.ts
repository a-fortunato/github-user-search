import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchByUrl = async (url: string) => {
  const response = await fetch(url)
  return response.json()
}

export const fetchUserRepos = createAsyncThunk(
  'user/fetchUserRepos',
  async (url: string) => fetchByUrl(url),
)

export const fetchUserFollowers = createAsyncThunk(
  'user/fetchUserFollowers',
  async (url: string) => fetchByUrl(url),
)

export const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async (url: string) => fetchByUrl(url),
)
