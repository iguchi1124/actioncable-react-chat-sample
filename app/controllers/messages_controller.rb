class MessagesController < ApplicationController
  def index
  end

  def create
    ActionCable.server.broadcast 'messages',
      message: params[:message][:content],
      name: session[:name]

    head :ok
  end
end
