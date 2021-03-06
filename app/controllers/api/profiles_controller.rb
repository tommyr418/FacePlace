class Api::ProfilesController < ApplicationController
  def create
    @profile = Profile.new(profile_params)
    @profile.user_id = current_user.id

    if @profile.save
      render partial: 'api/users/profile', locals: { user: @profile.user }
    else
      render json: @profile.errors.full_messages, status: 422
    end
  end

  def update
    @profile = Profile.find(params[:id])

    if @profile.user_id == current_user.id
      if @profile.update(profile_params)
        render partial: 'api/users/profile', locals: { user: @profile.user }
      else
        render json: @profile.errors.full_messages, status: 422
      end
    else
      render json: ["Users can only edit own profile"], status: 401
    end
  end

  def destroy
    @profile = Profile.find(params[:id])

    if @profile.user_id == current_user.id
      @profile.destroy
      render partial: 'api/users/profile', locals: { user: @profile.user }
    else
      render json: ["Users can only edit own profile"], status: 401
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:category, :sub_category, :value)
  end
end
