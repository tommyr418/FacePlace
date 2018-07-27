class Api::LikesController < ApplicationController
  before_action :find_likable

  def create
    @like = @likable.likes.new(like_params)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = @likable.likes.find_by(user_id: params[:like][:user_id])
    if @like
      Like.destroy(@like.id)
      render partial: 'api/posts/post', locals: { post: @likable }
    else
      render json: ["Like does not exist"], status: 404
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :likable_id, :likable_type)
  end

  def find_likable
    @klass = params[:like][:likable_type].capitalize.constantize
    @likable = @klass.find(params[:like][:likable_id])
  end
end
