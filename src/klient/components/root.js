import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect} from 'react-redux'
import {reducer as formReducer} from 'redux-form'
import { fetchMessagesIfNeeded } from '../actions'
import MessageForm from './message-form'

class Root extends Component {
  componentDidMount() {
    fetchMessagesIfNeeded()
  }

  render () {
    const { value, messages, message, onIncreaseClick, handleSubmit } = this.props
    const lis = messages.map(item => <li>{item.text}</li>)
    return (
      <div>
        <span>{value}</span>
        <MessageForm onSubmit={handleSubmit}/>
        <ul>
          {lis}
        </ul>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Root.propTypes = {
  message: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  messages: PropTypes.array.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Root
