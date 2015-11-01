class Messages extends React.Component {
  constructor() {
    super()
    this.state = {messages: []}
  }

  render() {
    return (
      <div className='messages'>
        {this.state.messages.map(function (message, i) {
          return <p key={i}><b>{message.sender}:</b>{message.content}</p>
        })}
      </div>
    )
  }

  componentDidMount() {
    this.setupSubscription()
  }

  updateMessage(message) {
    this.setState({
      messages: this.state.messages.concat({
        sender: message.sender, content: message.content
      })
    })
  }

  setupSubscription() {
    App.cable.subscriptions.create('MessagesChannel', {
      received(message) {
        return this.updateMessage(message)
      },
      updateMessage: this.updateMessage.bind(this)
    })
  }
}
