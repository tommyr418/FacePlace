# == Schema Information
#
# Table name: likes
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  likable_id   :integer          not null
#  likable_type :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Like < ApplicationRecord
  validates :user_id, :likable_id, presence: true
  validates :user_id, uniqueness: { scope: [:likable_id, :likable_type] }

  belongs_to :likable, polymorphic: true
  belongs_to :user
end
