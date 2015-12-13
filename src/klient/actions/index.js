export const POST_MESSAGE = 'POST_MESSAGE'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES'
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'

function requestMessages() {
  return {
    type: REQUEST_MESSAGES
  }
}

function receiveMessages(json) {
  console.log('receiveMessages: ', json)
  return {
    type: RECEIVE_MESSAGES,
    messages: json.data.children.map(child => child.data)
  }
}

function fetchPosts(reddit) {
  return dispatch => {
    dispatch(requestMessages())
    return fetch(`http://localhost:3000/messages`)
      .then(response => response.json())
      .then(json => dispatch(receiveMessages(json)))
  }
}

export function fetchMessagesIfNeeded() {
  return (dispatch, getState) => {
    return dispatch(fetchPosts())
  }
}
