/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICreateBugState {
  website: string
  status: string
}

const initialState: ICreateBugState = {
  website: '',
  status: '',
}

const createBugSlice = createSlice({
  name: 'createBugState',
  initialState,
  reducers: {
    setWebsite: (state, action: PayloadAction<string>) => {
      state.website = action.payload
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload
    },
  },
})

export const { setWebsite, setStatus } = createBugSlice.actions

export default createBugSlice.reducer
