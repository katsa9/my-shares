import React, { Component } from 'react'
import BuySellForm from './BuySellForm'

class SellPage extends Component {
  render() {
    return (
    <div>
      Sell page (title component)
      <BuySellForm buyMode={false}/>
    </div>
    )
  }
}
export default SellPage