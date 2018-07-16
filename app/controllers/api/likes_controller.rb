class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :likable_id, :likable_type)
  end
end
