import React, { Component } from 'react'

class Asset extends Component {
  render() {
    const { asset } = this.props
    console.log(asset)
    return (
    <div>
      {asset.ticker}
    </div>
    )
  }
}

export default Asset