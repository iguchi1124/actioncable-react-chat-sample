class SessionsController < ApplicationController
  def new
  end

  def create
    session[:name] = params[:session][:name]
    redirect_to messages_path
  end
end
