class Api::ProfilesController < ApplicationController
  def create
    @profile = profile.new(profile_params)
    @profile.user_id = current_user.id

    if @profile.save
      render :show
    else
      render json: @profile.errors.full_messages, status: 422
    end
  end

  def update
    @profile = Profile.find(params[:id])

    if @profile.user_id == current_user.id
      if @profile.update
        render :show
      else
        render json: @profile.errors.full_messages, status: 422
      end
    else
      render json: ["Users can only edit own profile"], status: 401
    end
  end

  def destrroy
    @profile = Profile.find(params[:id])

    if @profile.user_id == current_user.id
      @profile.destroy
      render json: {}
    else
      render json: ["Users can only edit own profile"], status: 401
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:category, :sub_category, :value)
  end
end
