class RemovePaperclipColumnsFromUserAndPost < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :profile_pic_file_name
    remove_column :users, :profile_pic_content_type
    remove_column :users, :profile_pic_file_size
    remove_column :users, :profile_pic_updated_at
    remove_column :users, :cover_photo_file_name
    remove_column :users, :cover_photo_content_type
    remove_column :users, :cover_photo_file_size
    remove_column :users, :cover_photo_updated_at
    remove_column :posts, :image_file_name
    remove_column :posts, :image_content_type
    remove_column :posts, :image_file_size
    remove_column :posts, :image_updated_at
  end
end
