# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  author_id          :integer          not null
#  wall_id            :integer          not null
#  body               :text             not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Post < ApplicationRecord
  validates :author_id, :wall_id, :body, presence: true

  belongs_to :author, foreign_key: :author_id, class_name: :User
  belongs_to :users_wall, foreign_key: :wall_id, class_name: :User

  has_attached_file :image, default_url: ""
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
