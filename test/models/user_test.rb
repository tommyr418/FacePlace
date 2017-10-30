# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  fname                    :string           not null
#  lname                    :string           not null
#  email                    :string           not null
#  birthdate                :string           not null
#  sex                      :string           not null
#  password_digest          :string           not null
#  session_token            :string           not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  profile_pic_file_name    :string
#  profile_pic_content_type :string
#  profile_pic_file_size    :integer
#  profile_pic_updated_at   :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
