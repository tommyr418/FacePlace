class Comment < ApplicationRecord
  validates :author_id, :post_id, :body, presence: true

  belongs_to :author, foreign_key: :author_id, class_name: :User
  belongs_to :post
end
