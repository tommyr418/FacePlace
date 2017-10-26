class CreateProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.string :category, null: false
      t.string :sub_category, null: false
      t.string :value, null: false

      t.timestamps
    end

    add_index :profiles, :user_id
  end
end
