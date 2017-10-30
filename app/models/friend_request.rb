# == Schema Information
#
# Table name: friend_requests
#
#  id           :integer          not null, primary key
#  requester_id :integer          not null
#  recipient_id :integer          not null
#  status       :string           default("pending"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class FriendRequest < ApplicationRecord
  validates :requester_id, :recipient_id, :status, presence: true
  validates :requester_id, uniqueness: { scope: :recipient_id }

  belongs_to :requester,
             foreign_key: :requester_id,
             class_name: :User

  belongs_to :recipient,
             foreign_key: :recipient_id,
             class_name: :User
end
