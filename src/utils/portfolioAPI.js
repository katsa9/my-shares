const api = "https://limitless-bayou-37895.herokuapp.com"

const headers = {
  'Accept': 'application/json'
}

export const getPortfolio = () =>
  fetch(`${api}/portfolio`, { headers })
    .then(res => res.json())

export const buy = (share) =>
  fetch(`${api}/buy?ticker=${share.ticker}&amount=${share.amount}`, {
    method: 'PUT',
    headers: headers
  }).then(res => res.json())

export const sell = (share) =>
  fetch(`${api}/sell?ticker=${share.ticker}&amount=${share.amount}`, {
    method: 'PUT',
    headers: headers
  }).then(res => res.json())

export const getCredit = () =>
  fetch(`${api}/credit`, { headers })
    .then(res => res.json())

export const addCredit = (amount) => {
console.log(`${api}/addCredit?amount=${amount}`);
  return fetch(`${api}/addCredit?amount=${amount}`, {
    method: 'PUT',
    headers: headers
  })
}

export function getInitialData () {
  return Promise.all([
    getPortfolio(),
    getCredit,
  ]).then(([portfolio, credit]) => ({
    portfolio,
    credit
  }))
}