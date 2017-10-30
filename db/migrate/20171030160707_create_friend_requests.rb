class CreateFriendRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :friend_requests do |t|
      t.integer :requester_id, null: false
      t.integer :recipient_id, null: false
      t.string :status, null: false, default: 'pending'

      t.timestamps
    end
  end
end
