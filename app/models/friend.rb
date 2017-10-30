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
end
