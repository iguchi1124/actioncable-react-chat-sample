class MessagesController < ApplicationController
  def index
  end

  def create
    ActionCable.server.broadcast 'messages',
      content: params[:message][:content],
      username: session[:name]

    head :ok
  end
end
