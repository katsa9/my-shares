import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleBuyShares, handleSellShares } from '../actions/portfolio'
import { Redirect } from 'react-router-dom'

class BuySellForm extends Component {

  state = {
    ticker: '',
    amount: '',
    toHome: false
  }

  handleChange = (e) => {
    const text = e.target.value
    const item = e.target.placeholder
    if (item === 'Enter ticker') {
      this.setState(() => ({
        ticker: text
      }))
    } else if (item === 'Enter amount') {
      this.setState(() => ({
        amount: text
      }))
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { ticker, amount } = this.state
    const { dispatch, buyMode } = this.props
    if(buyMode === true) {
      dispatch(handleBuyShares(ticker, amount))
    }else {
      dispatch(handleSellShares(ticker, amount))
    }
    this.setState(() => ({
      ticker: '',
      amount: '',
      toHome: true
    }))
  }

  render () {
    const { ticker, amount, toHome } = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }
    return (
              <form className='mx-2' onSubmit={this.handleSubmit}>
                <b>ENTER SHARE TICKER</b>
                <input type="text"
                  className="my-3 form-control input"
                  placeholder="Enter ticker"
                  value={ticker}
                  onChange={this.handleChange}
                  aria-label="Ticker">
                </input>
                <b>HOW MANY SHARES?</b>
                <input type="text"
                  className="my-3 form-control input"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={this.handleChange}
                  aria-label="Amount">
                </input>
                <div className="text-right">
                  <button className='btn btn-primary'
                    type='submit'
                    disabled={ticker === '' || amount === ''}>
                    Submit
                  </button>
                </div>
              </form>
    )
  }
}
export default connect()(BuySellForm)