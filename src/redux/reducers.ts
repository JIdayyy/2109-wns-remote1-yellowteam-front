/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux'

import app from './slices/app'
import search from './slices/search'

const rootReducer = combineReducers({ app, search })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
