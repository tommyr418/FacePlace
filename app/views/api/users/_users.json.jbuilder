users.each do |user|
  json.set! user.id.to_s.to_sym do
    json.extract! user, :id, :fname, :lname
    json.image_url asset_path(user.profile_pic.url)
  end
end
