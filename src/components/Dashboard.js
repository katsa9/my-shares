import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TopNav from './Nav'
import AssetList from './AssetList'
import BuyPage from './BuyPage'
import SellPage from './SellPage'
import AddCreditPage from './AddCreditPage'

class Dashboard extends Component {

  render () {
    return (
      <Router>  
        <TopNav />
        <div className="dark-container py-4">
          <div className="light-container center py-4 my-2">
            <Route path='/' exact component={AssetList} />
            <Route path='/buy' component={BuyPage} />
            <Route path='/sell' component={SellPage} />
            <Route path='/addCredit' component={AddCreditPage} />
          </div>
        </div>
      </Router>
    )
  }
}

export default connect()(Dashboard)