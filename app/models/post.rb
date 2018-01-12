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
  validates :author_id, :wall_id, presence: true

  validate :validate_content

  belongs_to :author, foreign_key: :author_id, class_name: :User
  belongs_to :users_wall, foreign_key: :wall_id, class_name: :User
  has_many :comments

  has_attached_file :image, default_url: ""
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  private

  def validate_content
    if [self.body, self.image].reject(&:blank?).empty?
      errors[:base] << "Must have either picture or text to post"
    end
  end
end
