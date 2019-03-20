class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render :show
    else
      render json: [{
          source: "Credentials",
          text: "Invalid Email or Password"
        }], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: [{
          source: "Request",
          text: "Already logged out"
        }], status: 422
    end
  end
end
