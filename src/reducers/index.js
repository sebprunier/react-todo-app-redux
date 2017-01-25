import { combineReducers } from 'redux'

import todos from './todos'
import filters from './filters'

export const reducer = combineReducers({
  todos,
  filters
})
