json.posts do
  json.partial! "api/posts/posts", posts: @posts
end

users = @posts.map(&:author)

json.users do
  users.each do |user|
    json.set! user.id.to_s.to_sym do
      json.extract! user, :id, :fname, :lname
      json.image_url asset_path(user.profile_pic.url)
    end
  end
end
