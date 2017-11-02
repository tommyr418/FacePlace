json.extract! post, :id, :author_id, :wall_id, :body
json.image_url asset_path(post.image.url)
