# ChatApp
This is a real time chat application.

Rails + ReactJS + WebSocket(ActionCable)

## Setup

### Run redis server

``$ bundle exec puma -p 28080 cable/config.ru``

``$ redis-server``

### Run rails server

``$ bundle exec rails s``
