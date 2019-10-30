import { showLoading, hideLoading } from 'react-redux-loading'
import { buy, sell } from '../utils/portfolioAPI'

export const RECEIVE_SHARES = "RECEIVE_SHARES"
export const BUY_SHARES = "BUY_SHARES"
export const SELL_SHARES = "SELL_SHARES"

export function receivePortfolio (portfolio) {
  return {
    type: RECEIVE_SHARES,
    portfolio
  }
}

function buyShares (updatedPortfolio) {
  return {
    type: BUY_SHARES,
    updatedPortfolio
  }
}

function sellShares (updatedPortfolio) {
  return {
    type: SELL_SHARES,
    updatedPortfolio
  }
}

//thunk
export function handleBuyShares (ticker, amount) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    console.log("in buy shares")
    console.log(ticker);
    console.log(amount);
    return buy({
      ticker,
      amount
    }).then((updatedPortfolio) => dispatch(buyShares(updatedPortfolio)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleBuyShares', e)
        alert('There was an error while buying shares. Try again')
      })
  }
}

//thunk
export function handleSellShares (ticker, amount) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return sell({
      ticker,
      amount
    }).then((updatedPortfolio) => dispatch(sellShares(updatedPortfolio)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleSellShares', e)
        alert('There was an error while selling shares. Try again')
      })
  }
}


