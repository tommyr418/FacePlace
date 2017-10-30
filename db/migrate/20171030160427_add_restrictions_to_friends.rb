class AddRestrictionsToFriends < ActiveRecord::Migration[5.1]
  def change
    change_column :friends, :friender_id, :integer, null: false
    change_column :friends, :friendee_id, :integer, null: false
  end
end
