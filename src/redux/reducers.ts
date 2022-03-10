/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux'

import app from './slices/app'
import createBug from './slices/createBug'

const rootReducer = combineReducers({ app, createBug })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
