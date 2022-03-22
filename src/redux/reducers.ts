/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux'

import app from './slices/app'
import search from './slices/search'
import bug from './slices/bug'

const rootReducer = combineReducers({ app, search, bug })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
