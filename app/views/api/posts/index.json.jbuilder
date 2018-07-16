json.posts do
  json.partial! "api/posts/posts", posts: @posts
end

relevant_comments = []
@posts.each { |post| relevant_comments += post.comments.pluck(:id) }

comments = Comment.all.select do |comment|
  relevant_comments.include?(comment.id)
end

json.comments do
  comments.each do |comment|
    json.set! comment.id.to_s.to_sym do
      json.extract! comment, :id, :author_id, :post_id, :body
      json.likes comment.likes.pluck(:user_id)
    end
  end
end

relevant_users = @posts.pluck(:author_id) + @posts.pluck(:wall_id)
relevant_users << current_user.id
relevant_users += comments.pluck(:author_id)

users = User.all.select { |user| relevant_users.include?(user.id) }

json.users do
  users.each do |user|
    json.set! user.id.to_s.to_sym do
      json.extract! user, :id, :fname, :lname
      json.image_url asset_path(user.profile_pic.url)
    end
  end
end
