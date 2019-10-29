const api = "https://limitless-bayou-37895.herokuapp.com"

const headers = {
  'Accept': 'application/json'
}

export const getPortfolio = () =>
  fetch(`${api}/portfolio`, { headers })
    .then(res => res.json())

export const buy = (ticker, amount) =>
  fetch(`${api}/buy?ticker=${ticker}&amount=${amount}`, {
    method: 'PUT',
    headers: headers
  }).then(res => res.json())

export const sell = (ticker, amount) =>
  fetch(`${api}/sell?ticker=${ticker}&amount=${amount}`, {
    method: 'PUT',
    headers: headers
  }).then(res => res.json())

export const getCredit = () =>
  fetch(`${api}/credit`, { headers })
    .then(res => res.json())

export const addCredit = (amount) =>
  fetch(`${api}/addCredit?amount=${amount}`, {
    method: 'PUT',
    headers: headers
  }).then(res => res.json())

export function getInitialData () {
  return Promise.all([
    getPortfolio(),
    getCredit,
  ]).then(([portfolio, credit]) => ({
    portfolio,
    credit
  }))
}