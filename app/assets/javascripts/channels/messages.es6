App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received(data) {
    return $('#messages').append("<p><b>" + data.username + ":</b> " + data.content + "</p>")
  }
})
