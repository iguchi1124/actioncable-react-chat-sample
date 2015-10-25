App.messages = App.cable.subscriptions.create 'MessagesChannel',
  received: (data) ->
    $('#messages').append @renderMessage(data)

  renderMessage: (data) ->
    "<p><b>[#{data.name}]:</b> #{data.message}</p>"
