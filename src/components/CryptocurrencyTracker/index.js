// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from './components/CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrenciesData: [], isLoading: true}

  componentDidMount = () => {
    this.getCurrency()
  }

  getCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const convertedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptocurrenciesData: convertedData, isLoading: false})
  }

  renderCurrencyList = () => {
    const {cryptocurrenciesData} = this.state
    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCurrencyList()
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
