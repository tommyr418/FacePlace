json.extract! @comment, :id, :author_id, :post_id, :body
json.likes @comment.likes.pluck(:user_id)
