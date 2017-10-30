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

class User < ApplicationRecord
  validates :fname, :lname, :email, :birthdate, :sex, :password_digest,
            :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :profiles

  has_many :outgoing_requests,
           foreign_key: :requester_id,
           class_name: :FriendRequest

  has_many :incoming_requests,
           foreign_key: :recipient_id,
           class_name: :FriendRequest

  has_many :sent_friendings,
           foreign_key: :friender_id,
           class_name: :Friend

  has_many :received_friendings,
           foreign_key: :friendee_id,
           class_name: :Friend

  has_many :sent_friends,
           through: :sent_friendings,
           source: :friendee

  has_many :received_friends,
           through: :received_friendings,
           source: :friender

  has_attached_file :profile_pic,
                    default_url: "default-profile-picture.png"
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\z/

  def friends
    sent_friends.pluck(:friendee_id)
      .concat(received_friends.pluck(:friender_id))
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  attr_reader :password

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end
end
