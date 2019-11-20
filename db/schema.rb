# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_20_214822) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "post_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["post_id"], name: "index_comments_on_post_id"
  end

  create_table "friend_requests", force: :cascade do |t|
    t.integer "requester_id", null: false
    t.integer "recipient_id", null: false
    t.string "status", default: "pending", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipient_id"], name: "index_friend_requests_on_recipient_id"
    t.index ["requester_id"], name: "index_friend_requests_on_requester_id"
  end

  create_table "friends", force: :cascade do |t|
    t.integer "friender_id", null: false
    t.integer "friendee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["friendee_id"], name: "index_friends_on_friendee_id"
    t.index ["friender_id"], name: "index_friends_on_friender_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "likable_id", null: false
    t.string "likable_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["likable_id", "likable_type"], name: "index_likes_on_likable_id_and_likable_type"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "wall_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["author_id"], name: "index_posts_on_author_id"
    t.index ["wall_id"], name: "index_posts_on_wall_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "category", null: false
    t.string "sub_category", null: false
    t.string "value", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "tag", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "email", null: false
    t.string "birthdate", null: false
    t.string "sex", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_pic_file_name"
    t.string "profile_pic_content_type"
    t.integer "profile_pic_file_size"
    t.datetime "profile_pic_updated_at"
    t.string "cover_photo_file_name"
    t.string "cover_photo_content_type"
    t.integer "cover_photo_file_size"
    t.datetime "cover_photo_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["fname"], name: "index_users_on_fname"
    t.index ["lname"], name: "index_users_on_lname"
  end

end
