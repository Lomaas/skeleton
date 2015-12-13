import {List, Map} from 'immutable'
import {
  POST_MESSAGE, REQUEST_MESSAGES,
  RECEIVE_MESSAGES
} from '../actions'

export default function messages (state = Map({messages: List(), message: ''}), action) {
  switch (action.type) {
    case POST_MESSAGE:
      console.log("Postmessage: ", action)
      if (!action.text || action.text.length < 1) {
        return state
      }
      let messages = state.get('messages').push(action.text)
      return state.set('messages', messages)
    case RECEIVE_MESSAGES:
      console.log("Reducer RECEIVE_MESSAGES action: ", action)
      return state
    default:
      return state
  }
}
