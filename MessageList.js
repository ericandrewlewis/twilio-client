import React from 'react'
import ReactDOM from 'react-dom'

export default class MessageList extends React.Component {
  constructor() {
    super()
  }

  render() {
    let messageNodes = this.props.messages.map(function(message, glerf) {
      return (
        <p key={glerf}>{message.content}</p>
      )
    })
    return (
      <div>
        {messageNodes}
      </div>
    )
  }
}
