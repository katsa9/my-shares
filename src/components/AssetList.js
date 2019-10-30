import React, { Component } from 'react'
import { connect } from 'react-redux'
import Asset from './Asset'

class AssetList extends Component {
  render () {
    const { portfolio } = this.props;
    console.log("portfolio", portfolio);
    console.log("portfolio values", Object.values(portfolio));

    return (

      <div>
        <ul>
          {Object.values(portfolio).map((item) => (
            <li key={item.ticker}>
              <Asset
                key={item.ticker}
                asset={item} />
            </li>
          ))}
        </ul>
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