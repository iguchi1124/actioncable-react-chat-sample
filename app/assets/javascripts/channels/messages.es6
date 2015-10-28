App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received(message) {
    return $('#messages').append("<p><b>" + message.sender + ":</b> " + message.content + "</p>")
  }
})
