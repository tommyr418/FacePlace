json.extract! user, :id, :fname, :lname
json.image_url asset_path(user.profile_pic.url)
