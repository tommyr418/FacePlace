json.user do
  json.extract! @user, :id, :fname, :lname, :email, :birthdate, :sex
  json.image_url asset_path(@user.profile_pic.url)
  json.friends @user.friends
end

json.partial! "api/users/profile", user: @user
