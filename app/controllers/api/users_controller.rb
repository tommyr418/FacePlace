class Api::UsersController < ApplicationController
  def friends
    @user = User.find(params[:id])
    @users = User.all.select { |user| @user.friends.include?(user.id) }
    render :friends
  end

  def requesters
    pending = current_user.incoming_requests.select do |request|
      request.status == "pending"
    end
    @users = User.all.select do |user|
      pending.pluck(:requester_id).include?(user.id)
    end
    render :requesters
  end

  def index
    if params[:search]
      @users = User.search(params[:search]).order("lname")
    else
      @users = User.all.order("lname")
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render '/api/sessions/show.json.jbuilder'
    else
      user_errors = []
      @user.errors.as_json(full_messages: true).each do |key, value|
        user_errors << {
          source: key.to_s,
          text: value[0]
        }
      end
      render json: user_errors, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:profiles).find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :email, :birthdate,
                                 :sex, :password, :profile_pic, :cover_photo)
  end
end
