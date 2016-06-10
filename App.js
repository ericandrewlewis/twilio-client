import React from 'react'
import ComposeMessage from './ComposeMessage'
import MessageList from './MessageList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.update = this.update.bind(this)
    this.send = this.send.bind(this)
  }

  update(e) {
    this.setState({
      message: e.target.value
    })
  }

  send() {
    console.log('send' +this.state.message)
  }
  render() {
    let messageList = [
      {
        content: 'The US mens basketball team takes gold over Russia'
      },
      {
        content: 'Mexico tops Brazil in soccer for gold medal'
      },
      {
        content: 'How do you Brazil will do in today\'s soccer final?'
      }
    ]
    return (
      <div>
        <ComposeMessage update={this.update} message={this.state.message} send={this.send} />
        <MessageList messages={messageList} />
      </div>
    )
  }
}

export default App
