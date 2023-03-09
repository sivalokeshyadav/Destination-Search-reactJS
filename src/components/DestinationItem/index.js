// Write your code here
import './index.css'

import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {searchInfo} = this.props
    const {name, imgUrl} = searchInfo
    return (
      <li className="list-items-container">
        <img src={imgUrl} className="img-element" alt={name} />
        <p className="para-item">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
