import {Map} from 'immutable'

export default function counter (state = Map({count: 0}), action) {
  let count = state.get('count')

  switch (action.type) {
    case 'increase':
      return state.set('count', count + action.value)
    default:
      return state
  }
}
