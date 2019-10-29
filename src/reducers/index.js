import { combineReducers } from 'redux'
import credit from './credit'
import portfolio from './portfolio'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  credit,
  portfolio,
  loadingBar: loadingBarReducer
})