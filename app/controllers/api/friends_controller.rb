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
    @friend = Friend.find_by_ids(
      params[:friend][:friender_id],
      params[:friend][:friendee_id]
    )

    if @friend
      @friend.destroy
      render json: ["sucess"]
    else
      render json: ["User is not your friend"], status: 422
    end
  end

  private

  def friend_params
    params.require(:friend).permit(:friender_id, :friendee_id)
  end
end
