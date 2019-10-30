import React, { Component } from 'react'
import BuySellForm from './BuySellForm'
import Header from './Header';

class SellPage extends Component {
  render() {
    let text = "SELL SHARES";
    return (
    <div>
    <Header heading={text}/>
      <BuySellForm buyMode={false}/>
    </div>
    )
  }
}
export default SellPage