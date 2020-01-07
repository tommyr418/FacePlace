json.user do
  json.extract! @user, :id, :fname, :lname, :email, :birthdate, :sex
  json.friends @user.friends
  json.wall_posts @user.wall_posts.pluck(:id).reverse
end

json.partial! "api/users/profile", user: @user
