import React, { Component } from 'react'
import { connect } from 'react-redux'

class AssetList extends Component {
  render() {
    const { portfolio } = this.props;
    console.log("portfolio", portfolio);
    return (
    <div className="center">
      AssetList
      <div>
            {Object.values(portfolio).map((item) => (
              <button>{item.ticker}</button>
            ))}
          </div>
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