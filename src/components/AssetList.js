import React, { Component } from 'react'
import { connect } from 'react-redux'
import Asset from './Asset'
import Header from './Header';

class AssetList extends Component {
  render () {
    const { portfolio } = this.props;
    let text = "PORTFOLIO";
    return (

      <div>
      <Header heading={text}/>
      <b className="pl-3">ASSET SUMMARY</b>
        {Object.keys(portfolio).length === 0 && <label>You have no assets</label>}
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