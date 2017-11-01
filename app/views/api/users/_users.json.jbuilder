users.each do |user|
  json.set! user.id.to_s.to_sym do
    json.extract! user, :id, :fname, :lname, :profile_pic
  end
end
