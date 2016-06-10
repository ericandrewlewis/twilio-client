import React from 'react'
import ReactDOM from 'react-dom'

export default class ComposeMessage extends React.Component {
  constructor() {
    super()
  }

  render() {
    let message = this.props.message
    return (
      <div>
        <textarea onChange={this.props.update} value={message} />
        <button onClick={this.props.send}>Send</button>
      </div>
    )
  }
}
