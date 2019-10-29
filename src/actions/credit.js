import { showLoading, hideLoading } from 'react-redux-loading'
import { getCredit, addCredit } from '../utils/portfolioAPI'

export const RECEIVE_CREDIT = "RECEIVE_CREDIT"
export const ADD_CREDIT = "ADD_CREDIT"

export function receiveCredit (credit) {
  return {
    type: RECEIVE_CREDIT,
    credit
  }
}

export function addCredit (credit) {
  return {
    type: ADD_CREDIT,
    credit
  }
}

//thunk
export function handleGetCredit () {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return getCredit()
      .then((credit) => dispatch(receiveCredit({credit: credit.value})))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleGetCredit', e)
        alert('There was an error while retrieving your credit. Try again')
      })
  }
}

//thunk
export function handleAddCredit (amount) {
  let credit = {
    credit: amount
  }
  return (dispatch, getState) => {
    dispatch(showLoading())
    return addCredit(amount)
      .then(() => dispatch(addCredit(credit)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleAddCredit', e)
        alert('There was an error while adding your credit. Try again')
      })
  }
}