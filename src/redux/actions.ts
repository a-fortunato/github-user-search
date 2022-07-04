import { createAsyncThunk } from '@reduxjs/toolkit'
import config from '../config'

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

export const fetchUsers = createAsyncThunk(
  'search/fetchUsers',
  async (text: string) => {
    const queryString = `q=${encodeURIComponent(`${text} in:login`)}`
    const url = `${config.host}/search/users?${queryString}`
    const data = await fetchByUrl(url)
    return data?.items
  },
)
