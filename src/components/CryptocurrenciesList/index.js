// Write your JS code here
import {Component} from 'react'
import './index.css'

import CryptoCurrencyItem from './components/CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  
  renderCryptoCurrencyView = () => {
    const {cryptocurrenciesData} = this.props
    return (
      <div className="currency-details-box">
        <div className="header">
          <p className="text">Coin Type</p>
          <div>
            <p className="text">USD</p>
            <p className="text">EURO</p>
          </div>
        </div>
        <ul className="list-body">
          {cryptocurrenciesData.map(eachData => (
            <CryptoCurrencyItem key={eachData.id} currencyDetails={eachData} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="currency"
        />
        {this.renderCryptoCurrencyView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
