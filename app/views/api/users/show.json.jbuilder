json.user do
  json.extract! @user, :id, :fname, :lname, :email, :birthdate, :sex
end
json.profile do
  json.workAndEducation do

  end
end
