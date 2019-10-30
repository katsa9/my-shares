import React, { Component } from 'react'
import { handleAddCredit } from '../actions/credit'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AddCreditPage extends Component {
  state = {
    amount: '',
    toHome: false
  }

  handleChange = (e) => {
    const text = e.target.value
    this.setState(() => ({
      amount: text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { amount } = this.state
    const { dispatch } = this.props
    dispatch(handleAddCredit(amount));
    this.setState(() => ({
      amount: '',
      toHome: true
    }))
  }

  render () {
    const { amount, toHome } = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <form className='mx-2' onSubmit={this.handleSubmit}>
          <b>ENTER AMOUNT TO ADD</b>
          <input type="text"
            className="my-3 form-control input"
            placeholder="Enter amount"
            value={amount}
            onChange={this.handleChange}
            aria-label="Ticker">
          </input>

          <div className="text-right">
            <button className='btn btn-primary'
              type='submit'
              disabled={amount === ''}>
              Add Credit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default connect()(AddCreditPage)