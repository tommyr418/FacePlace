# == Schema Information
#
# Table name: friends
#
#  id          :integer          not null, primary key
#  friender_id :integer          not null
#  friendee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Friend < ApplicationRecord
  validates :friender_id, :friendee_id, presence: true
  validates :friender_id, uniqueness: { scope: :friendee_id }

  belongs_to :friender,
             foreign_key: :friender_id,
             class_name: :User

  belongs_to :friendee,
             foreign_key: :friendee_id,
             class_name: :User

  def self.find_by_ids(friender_id, friendee_id)
    result = self.find_by(friender_id: friender_id, friendee_id: friendee_id)
    if result
      return result
    else
      return self.find_by(friender_id: friendee_id, friendee_id: friender_id)
    end
  end
end
