import { showLoading, hideLoading } from 'react-redux-loading'
import { buy, sell } from '../utils/portfolioAPI'

export const RECEIVE_SHARES = "RECEIVE_SHARES"
export const BUY_SHARES = "BUY_SHARES"
export const SELL_SHARES = "SELL_SHARES"

export function receivePortfolio (shares) {
  return {
    type: RECEIVE_SHARES,
    shares
  }
}

function buyShares (toBuy) {
  return {
    type: BUY_SHARES,
    toBuy
  }
}

function sellShares (toSell) {
  return {
    type: SELL_SHARES,
    toSell
  }
}

//thunk
export function handleBuyShares (ticker, amount) {
  let toBuy = {
    ticker,
    amount
  }
  return (dispatch, getState) => {
    dispatch(showLoading())
    return buy({
      ticker,
      amount
    }).then(() => dispatch(buyShares(toBuy)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleBuyShares', e)
        alert('There was an error while buying shares. Try again')
      })
  }
}

//thunk
export function handleSellShares (ticker, amount) {
  let toSell = {
    ticker,
    amount
  }
  return (dispatch, getState) => {
    dispatch(showLoading())
    return sell({
      ticker,
      amount
    }).then(() => dispatch(sellShares(toSell)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleSellShares', e)
        alert('There was an error while selling shares. Try again')
      })
  }
}


