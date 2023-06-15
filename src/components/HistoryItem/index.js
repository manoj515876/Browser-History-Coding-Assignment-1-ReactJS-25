import './index.css'
import {Component} from 'react'

class HistoryItem extends Component {
  render() {
    const {historyDetails, onDeleteHistory} = this.props
    const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
    const onDelete = () => {
      onDeleteHistory(id)
    }
    return (
      <li className="list-card">
        <div className="sub-card">
          <p className="para">{timeAccessed}</p>
          <div className="history-card">
            <img src={logoUrl} alt="domain logo" className="domain-logo" />
            <p className="heading">{title}</p>
            <p className="para-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default HistoryItem
