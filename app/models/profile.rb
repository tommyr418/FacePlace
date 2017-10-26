# == Schema Information
#
# Table name: profiles
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  category     :string           not null
#  sub_category :string           not null
#  value        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Profile < ApplicationRecord
  validates :user_id, :category, :sub_category, :value, presence: true

  belongs_to :user
end
