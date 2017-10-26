json.user do
  json.extract! @user, :id, :fname, :lname, :email, :birthdate, :sex
end

json.partial! "api/users/profile", user: @user
