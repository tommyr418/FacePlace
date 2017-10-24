class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :email, null: false, unique: true
      t.string :birthdate, null: false
      t.string :sex, null: false
      t.string :password_disgest, null: false
      t.string :session_token, null: false

      t.timestamps
    end

    add_index :users, :fname
    add_index :users, :lname
    add_index :users, :email, unique: true
  end
end
