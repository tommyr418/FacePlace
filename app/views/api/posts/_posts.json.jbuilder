posts.each do |post|
  json.set! post.id.to_s.to_sym do
    json.extract! post, :id, :author_id, :wall_id, :body
    json.image_url asset_path(post.image.url)
    json.comments post.comments.pluck(:id)
  end
end
