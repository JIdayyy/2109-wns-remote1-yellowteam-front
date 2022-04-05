/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface ICreateBugFormState {
  selectedWebsite: string
  selectedCategory: string
}

const initialState: ICreateBugFormState = {
  selectedWebsite: '',
  selectedCategory: '',
}

const createBugSlice = createSlice({
  name: 'createBugSlice',
  initialState,
  reducers: {
    setSelectedWebsite: (state, action) => {
      state.selectedWebsite = action.payload
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
  },
})

export const { setSelectedWebsite, setSelectedCategory } =
  createBugSlice.actions

export default createBugSlice.reducer
