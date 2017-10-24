class FixTypoInUser < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :password_disgest, :password_digest
  end
end
