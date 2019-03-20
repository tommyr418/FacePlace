class AddNewIndexesToTables < ActiveRecord::Migration[5.1]
  def change
    add_index :friend_requests, :requester_id
    add_index :friend_requests, :recipient_id
    add_index :friends, :friender_id
    add_index :friends, :friendee_id
    add_index :likes, [:likable_id, :likable_type]
  end
end
