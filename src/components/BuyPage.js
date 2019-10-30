import React, { Component } from 'react'
import BuySellForm from './BuySellForm'

class BuyPage extends Component {
  render() {
    return (
    <div>
      Buy page (title component)
      <BuySellForm buyMode={true}/>
    </div>
    )
  }
}
export default BuyPage