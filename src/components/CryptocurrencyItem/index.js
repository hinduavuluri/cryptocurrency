// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails

  return (
    <li>
      <div className="container">
        <div className="currency-container">
          <img src={currencyLogo} alt={currencyName} className="logo" />
          <p className="name">{currencyName}</p>
        </div>
        <div className="currency-container">
          <p className="value">{usdValue}</p>
          <p className="value">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
