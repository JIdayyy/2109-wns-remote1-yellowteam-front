/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux'

import app from './slices/app'
import search from './slices/search'
import createBug from './slices/form/createBug'
import bug from './slices/bug'
import uploadFile from './slices/form/uploadFile'

const rootReducer = combineReducers({ app, search, bug, createBug, uploadFile })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
