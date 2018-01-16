class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render partial: '/api/posts/post', locals: { post: @comment.post }
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :post_id, :body)
  end
end
