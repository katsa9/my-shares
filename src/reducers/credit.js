import { RECEIVE_CREDIT,ADD_CREDIT } from '../actions/credit'

export default function credit(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CREDIT:
      return {
        ...state,
        ...action.credit
      }
    case ADD_CREDIT:
      const { credit } = action
      
      return {
        ...state,
        credit: state.credit + credit
      }
    default:
      return state
  }
}