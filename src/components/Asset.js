import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Asset extends Component {

  goToBuy = () => {
    this.props.history.push("/buy");
  }

  goToSell = () => {
    this.props.history.push("/sell");
  }

  render () {
    const { asset } = this.props
    console.log(asset)
    return (
      <div className="container">
        <div className="p-2">
          <div className="d-flex">
            <div className="col-md-9">
              <h5>{asset.ticker}</h5>
              <h2>${asset.totalValue}</h2>
            </div>
            <div className="col-md-3 mt-3">
              <div className="d-flex">
                <button className="btn btn-green mr-2"
                  onClick={this.goToBuy}>+</button>
                <button className="btn btn-red mr-2"
                onClick={this.goToSell}>-</button>
              </div>
              <div className="d-flex mt-2">
                <h5 className="float-right">{asset.shareCount} shares</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(Asset)