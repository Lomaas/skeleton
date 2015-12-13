import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'
export const fields = ['message']

class MessageForm extends Component {
  render() {
    const {
      fields: {message},
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
         <div>
           <label>First Name</label>
           <input type="text" placeholder="First Name" {...message}/>
         </div>
         <button onClick={handleSubmit}>Submit</button>
       </form>
    );
  }
}

MessageForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'simple',
  fields
})(MessageForm);
