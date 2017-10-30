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

require 'test_helper'

class FriendTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
