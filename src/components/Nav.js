import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class TopNav extends Component {
  
  state = {
    collapsed: true,
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render () {
    const { collapsed } = this.state
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <button onClick={this.toggleNavbar} 
          className={classTwo} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={classOne} id="navbarResponsive">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <NavLink to='/' exact className="nav-link" activeClassName='active'>
               Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/buy' className="nav-link" activeClassName='active'>
            Buy
          </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/sell' className="nav-link" activeClassName='active'>
              Sell
             </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/addCredit' className="nav-link" activeClassName='active'>
              Add Credit
             </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default TopNav

