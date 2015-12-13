import {List, Map} from 'immutable'

export default function messages (state = Map({messages: List(), message: ''}), action) {
  switch (action.type) {
    case 'postMessage':
      console.log("Postmessage: ", action)
      if (!action.text || action.text.length < 1) {
        return state
      }
      let messages = state.get('messages').push(action.text)
      return state.set('messages', messages)
    default:
      return state
  }
}
