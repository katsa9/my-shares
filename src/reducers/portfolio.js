import { RECEIVE_SHARES, BUY_SHARES, SELL_SHARES } from '../actions/portfolio'

export default function portfolio(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SHARES:
      if(action.portfolio.empty) {
        return state
      }
      return {
        ...state,
        ...action.portfolio
      }
    case BUY_SHARES:
      return {
        ...state,
        ...action.updatedPortfolio
      }
      case SELL_SHARES:
      return {
        ...state,
        ...action.updatedPortfolio
      }
    default:
      return state
  }
}