/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface IUploadFileForm {
  selectedBug: string
}

const initialState: IUploadFileForm = {
  selectedBug: '',
}

const uploadFileSlice = createSlice({
  name: 'uploadFileSlice',
  initialState,
  reducers: {
    setSelectedBug: (state, action) => {
      state.selectedBug = action.payload
    },
  },
})

export const { setSelectedBug } = uploadFileSlice.actions

export default uploadFileSlice.reducer
