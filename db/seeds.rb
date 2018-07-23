# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
user = User.new(email: "homer@yahoo.com", password: "homersimpson",
                   fname: "Homer", lname: "Simpson", birthdate: "04/17/1970",
                   sex: "male")

file = File.open('app/assets/images/homer.jpg')
user.profile_pic = file
user.save!

f1 = User.new(email: "marge@yahoo.com", password: "margesimpson",
                 fname: "Marge", lname: "Simpson", birthdate: "10/10/1973",
                 sex: "female")

file = File.open('app/assets/images/marge.png')
f1.profile_pic = file
f1.save!

f2 = User.new(email: "bart@yahoo.com", password: "bartsimpson", fname: "Bart",
            lname: "Simpson", birthdate: "12/30/1992", sex: "male")

file = File.open('app/assets/images/bart.png')
f2.profile_pic = file
f2.save!

f3 =  User.new(email: "lisa@yahoo.com", password: "lisasimpson", fname: "Lisa",
            lname: "Simpson", birthdate: "01/18/1994", sex: "female")

file = File.open('app/assets/images/lisa.png')
f3.profile_pic = file
f3.save!

u1 = User.new(email: "ned@yahoo.com", password: "nedflanders", fname: "Ned",
            lname: "Flanders", birthdate: "12/25/1945", sex: "male")

file = File.open('app/assets/images/ned.png')
u1.profile_pic = file
u1.save!

u2 = User.new(email: "maude@yahoo.com", password: "maudeflanders", fname: "Maude",
            lname: "Flanders", birthdate: "12/02/1952", sex: "female")

file = File.open('app/assets/images/maude.png')
u2.profile_pic = file
u2.save!

f4 = User.new(email: "moe@yahoo.com", password: "moesizlack", fname: "Moe",
            lname: "Sizlack", birthdate: "07/12/1959", sex: "male")

file = File.open('app/assets/images/moe.jpg')
f4.profile_pic = file
f4.save!

f5 = User.new(email: "barney@yahoo.com", password: "barneygumble",
            fname: "Barney",
            lname: "Gumble", birthdate: "05/14/1965", sex: "male")

file = File.open('app/assets/images/barney.png')
f5.profile_pic = file
f5.save!

f6 = User.new(email: "lenny@yahoo.com", password: "lennyleonard", fname: "Lenny",
            lname: "Leonard", birthdate: "11/27/1970", sex: "male")

file = File.open('app/assets/images/lenny.jpg')
f6.profile_pic = file
f6.save!

f7 = User.new(email: "carl@yahoo.com", password: "carlcarlsom", fname: "Carl",
            lname: "Carlson", birthdate: "11/14/1971", sex: "male")

file = File.open('app/assets/images/carl.png')
f7.profile_pic = file
f7.save!

u3 = User.new(email: "mrburns@yahoo.com", password: "charlesburns",
            fname: "Charles",
            lname: "Burns", birthdate: "02/28/1899", sex: "male")

file = File.open('app/assets/images/mrburns.png')
u3.profile_pic = file
u3.save!


Profile.destroy_all
Profile.create(user_id: user.id, category: "placesYouveLived",
               sub_category: "currentCityAndHometown",
               value: "Lives In: Springfeild")
Profile.create(user_id: user.id, category: "familyAndRelationships",
               sub_category: "familyMembers",
               value: "Son: Bart Simpson")
Profile.create(user_id: user.id, category: "familyAndRelationships",
               sub_category: "familyMembers",
               value: "Daughter: Lisa Simpson")
Profile.create(user_id: user.id, category: "familyAndRelationships",
               sub_category: "familyMembers",
               value: "Wife: Marge Simpson")
Profile.create(user_id: user.id, category: "familyAndRelationships",
               sub_category: "relationship",
               value: "Relationship: Marge Simpson")
Profile.create(user_id: user.id, category: "workAndEducation",
               sub_category: "work",
               value: "Works At: Springfeild Nuclear Power Plant")

FriendRequest.destroy_all
FriendRequest.create(requester_id: user.id,
                     recipient_id: f1.id, status: "completed")
FriendRequest.create(requester_id: user.id,
                     recipient_id: f2.id, status: "completed")
FriendRequest.create(requester_id: f3.id,
                     recipient_id: user.id, status: "completed")
FriendRequest.create(requester_id: user.id,
                     recipient_id: f4.id, status: "completed")
FriendRequest.create(requester_id: f5.id,
                     recipient_id: user.id, status: "completed")
FriendRequest.create(requester_id: f6.id,
                     recipient_id: user.id, status: "completed")
FriendRequest.create(requester_id: user.id,
                     recipient_id: f7.id, status: "completed")
FriendRequest.create(requester_id: f3.id,
                     recipient_id: f2.id, status: "completed")
FriendRequest.create(requester_id: u1.id,
                     recipient_id: user.id)
FriendRequest.create(requester_id: u3.id,
                     recipient_id: user.id)
FriendRequest.create(requester_id: f6.id,
                     recipient_id: u3.id, status: "completed")

Friend.destroy_all
Friend.create(friender_id: user.id, friendee_id: f1.id)
Friend.create(friender_id: user.id, friendee_id: f2.id)
Friend.create(friender_id: f3.id, friendee_id: user.id)
Friend.create(friender_id: user.id, friendee_id: f4.id)
Friend.create(friender_id: f5.id, friendee_id: user.id)
Friend.create(friender_id: f6.id, friendee_id: user.id)
Friend.create(friender_id: user.id, friendee_id: f7.id)

User.all.each do |person|
  next if user.id == person.id
  2.times do
    random = User.all.sample.id
    while(person.friends.include?(random) || person.id == random)
      random = User.all.sample.id
    end
    Friend.create(friender_id: person.id, friendee_id: random)
  end
end

Post.destroy_all
Post.create(author_id: user.id, wall_id: user.id, body: "Doughnuts!")
Post.create(author_id: user.id, wall_id: user.id, body: "Doh!")
Post.create(author_id: user.id, wall_id: user.id, body: "I’ve learned that life is one crushing defeat after another until you just wish Flanders was dead.")
Post.create(author_id: user.id, wall_id: user.id, body: "My beer! You never had a chance to become my urine!")
Post.create(author_id: f1.id, wall_id: user.id, body: "Feed the dog")
Post.create(author_id: f2.id, wall_id: user.id, body: "Homer sucks")
Post.create(author_id: f3.id, wall_id: user.id, body: "Plese drive me to recital")
Post.create(author_id: f4.id, wall_id: user.id, body: "Pay your tab bozo.")
Post.create(author_id: f2.id, wall_id: f3.id, body: "eat my shorts")
Post.create(author_id: f3.id, wall_id: f2.id, body: "no you")
Post.create(author_id: f6.id, wall_id: u3.id, body: "gonna be out from work boss")

50.times do |num|
  person = User.all.sample
  Post.create(author_id: person.id, wall_id: person.friends.sample, body: Faker::Simpsons.quote)
end

50.times do |num|
  person = User.all.sample
  post = Post.all.sample
  Like.create(user_id: person.id, likable_id: post.id, likable_type: "Post")
end
