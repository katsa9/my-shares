import React, { Component } from 'react'
import { connect } from 'react-redux'

class AssetList extends Component {
  render() {
    const { portfolio } = this.props;
    return (
    <div className="center">
      AssetList
      {Object.values(portfolio).map((item) => (
              <label>{item.ticker}</label>
            ))}
    </div>
    )
  }
}

function mapStateToProps ({ portfolio, credit }) {
  return {
    portfolio,
    credit
  }
}

export default connect(mapStateToProps)(AssetList)