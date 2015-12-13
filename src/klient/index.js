import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect} from 'react-redux'
import messagesReducer from './reducers/messages'
import counterReducer from './reducers/counter'
import actionTypes from './actions/types'
import MessageForm from './components/message-form'
import {reducer as formReducer} from 'redux-form'
import Root from './components/root'

// Action
const increaseAction = {type: 'increase', value: 1}

// Map Redux state to component props
function mapStateToProps (state) {
  return {
    message: state.messagesReducer.get('message'),
    value: state.counterReducer.get('count'),
    messages: state.messagesReducer.get('messages').toArray()
  }
}

// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    handleSubmit: (form) => {
      return dispatch({type: 'postMessage', text: form.message})
    }
  }
}

const reducers = combineReducers({
  counterReducer,
  messagesReducer,
  form: formReducer
})

let store = createStore(reducers)
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
