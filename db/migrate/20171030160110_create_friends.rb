class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.integer :friender_id
      t.integer :friendee_id

      t.timestamps
    end
  end
end
