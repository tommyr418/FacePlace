json.extract! post, :id, :author_id, :wall_id, :body
json.image_url asset_path(post.image.url)
json.comments post.comments.pluck(:id)
json.likes post.likes.pluck(:user_id)
