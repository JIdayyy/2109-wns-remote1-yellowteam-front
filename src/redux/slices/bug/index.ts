/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface IBugState {
  isBugListOpen: boolean
}

const initialState: IBugState = {
  isBugListOpen: true,
}

const bugSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    toggleBugList: (state) => {
      state.isBugListOpen = !state.isBugListOpen
    },
  },
})

export const { toggleBugList } = bugSlice.actions

export default bugSlice.reducer
