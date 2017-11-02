class Api::FriendRequestsController < ApplicationController
  def create
    @friend_request = FriendRequest.new(friend_request_params)
    @user = current_user

    if @friend_request.save
      render '/api/sessions/show.json.jbuilder'
    else
      render json: @friend_request.errors.full_messages, status: 422
    end
  end

  def update
    @friend_request = FriendRequest.find(params[:id])
    @user = current_user

    if @friend_request && @friend_request.status == "pending" &&
      @friend_request.update(friend_request_params)
      render '/api/sessions/show.json.jbuilder'
    else
      render json: ["Request Already Completed"], status: 422
    end
  end

  private

  def friend_request_params
    params.require(:friend_request)
      .permit(:recipient_id, :requester_id, :status)
  end
end
