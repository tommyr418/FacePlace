class AddTagsToProfiles < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :tag, :string, null: false
  end
end
