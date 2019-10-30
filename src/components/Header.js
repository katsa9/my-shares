import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Header extends Component {

  goToCreditPage = () => {
    this.props.history.push("/addCredit");
  }

  render () {
    const { credit, heading } = this.props
    console.log(credit)
    return (
      <div className="p-3">
        <div className="row justify-content-center">
          <h3 >{heading}</h3>
        </div>
        <div className="row justify-content-center">
          <p className="center">{new Date().toLocaleDateString("en-US")}</p>
        </div>
        <b>CREDIT BALANCE</b>
        <div className="d-flex">
          <h4 className="mt-3">{credit.value}</h4>
          <button className='ml-auto btn btn-primary'
            type='submit'
            onClick={this.goToCreditPage}>
            Add Credit
          </button>
        </div>
        <hr></hr>
      </div>
    )
  }
}

function mapStateToProps ({ credit }, { heading }) {
  return {
    credit,
    heading
  }
}
export default withRouter(connect(mapStateToProps)(Header))