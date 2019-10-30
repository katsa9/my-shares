import React, { Component } from 'react'
import BuySellForm from './BuySellForm'
import Header from './Header';

class BuyPage extends Component {
  render() {
    let text = "BUY SHARES";
    return (
    <div>
     <Header heading={text}/>
      <BuySellForm buyMode={true}/>
    </div>
    )
  }
}
export default BuyPage