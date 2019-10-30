import React, { Component } from 'react'

class Asset extends Component {
  render() {
    const { asset } = this.props
    console.log(asset)
    return (
    <div className="container">
      <div className="p-3">
        <h5>{asset.ticker}</h5>
        <h2>${asset.totalValue}</h2>
      </div>
      
    </div>
    )
  }
}

export default Asset