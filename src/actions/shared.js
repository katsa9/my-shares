import { getInitialData } from '../utils/portfolioAPI'
import { showLoading, hideLoading } from 'react-redux-loading'
import { receivePortfolio } from './portfolio'
import { receiveCredit } from './credit'

//thunk action creator
export function handleInitialData() {
  console.log("in handle initial data");
  return (dispatch, getState) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({portfolio, credit}) => {
      dispatch(receivePortfolio(portfolio))
      dispatch(receiveCredit(credit))
      dispatch(hideLoading())
    })
  }
}

