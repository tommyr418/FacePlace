posts.each do |post|
  json.set! post.id.to_s.to_sym do
    json.extract! post, :id, :author_id, :wall_id, :body, :created_at
    json.comments post.comments.sort_by(&:created_at).pluck(:id)
    json.likes post.likes.pluck(:user_id)
  end
end
