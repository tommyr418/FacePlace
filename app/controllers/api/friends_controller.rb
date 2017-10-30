class Api::FriendsController < ApplicationController
  def create
    @friend = Friend.new(friend_params)

    if @friend.save
      render json: ["sucess"]
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end

  def destroy
    @friend = Friend.find(params[:id])

    
  end

  private

  def friend_params
    params.require(:friend).permit(:friender_id, :friendee_id)
  end
end
