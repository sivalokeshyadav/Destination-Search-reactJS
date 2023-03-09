// Write your code here
import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onUpdateList = name => {
    this.setState({searchInput: name})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="input-container">
          <h1 className="heading">Destination Search</h1>
          <div className="container-search">
            <input
              type="search"
              className="input-element"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search icon"
            />
          </div>
        </div>
        <ul className="list-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              searchInfo={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
