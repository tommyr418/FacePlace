class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render :index
  end

  def wall_posts
    @user = User.find(params[:id])
    @posts = @user.wall_posts
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post && @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post
      @post.destroy
      render json: {}
    else
      render json: ["Post does not exist"], status: 404
    end
  end

  private

  def post_params
    params.require(:post).permit(:author_id, :wall_id, :body, :image)
  end
end
