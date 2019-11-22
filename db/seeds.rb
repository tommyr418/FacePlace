# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
homer = User.new(email: "homer@yahoo.com", password: "homersimpson",
                   fname: "Homer", lname: "Simpson", birthdate: "04/17/1970",
                   sex: "male")

homer.save!

jon = User.new(email: "jon@yahoo.com", password: "jontargaryen",
                   fname: "Jon", lname: "Snow", birthdate: "04/18/1980",
                   sex: "male")

jon.save!

marge = User.new(email: "marge@yahoo.com", password: "margesimpson",
                 fname: "Marge", lname: "Simpson", birthdate: "10/10/1973",
                 sex: "female")

marge.save!

bart = User.new(email: "bart@yahoo.com", password: "bartsimpson", fname: "Bart",
            lname: "Simpson", birthdate: "12/30/1992", sex: "male")

bart.save!

lisa =  User.new(email: "lisa@yahoo.com", password: "lisasimpson", fname: "Lisa",
            lname: "Simpson", birthdate: "01/18/1994", sex: "female")

lisa.save!

ned = User.new(email: "ned@yahoo.com", password: "nedflanders", fname: "Ned",
            lname: "Flanders", birthdate: "12/25/1945", sex: "male")

ned.save!

maude = User.new(email: "maude@yahoo.com", password: "maudeflanders", fname: "Maude",
            lname: "Flanders", birthdate: "12/02/1952", sex: "female")

maude.save!

moe = User.new(email: "moe@yahoo.com", password: "moesizlack", fname: "Moe",
            lname: "Sizlack", birthdate: "07/12/1959", sex: "male")

moe.save!

barney = User.new(email: "barney@yahoo.com", password: "barneygumble",
            fname: "Barney",
            lname: "Gumble", birthdate: "05/14/1965", sex: "male")

barney.save!

lenny = User.new(email: "lenny@yahoo.com", password: "lennyleonard", fname: "Lenny",
            lname: "Leonard", birthdate: "11/27/1970", sex: "male")

lenny.save!

carl = User.new(email: "carl@yahoo.com", password: "carlcarlsom", fname: "Carl",
            lname: "Carlson", birthdate: "11/14/1971", sex: "male")

carl.save!

burns = User.new(email: "mrburns@yahoo.com", password: "charlesburns",
            fname: "Charles",
            lname: "Burns", birthdate: "02/28/1899", sex: "male")

burns.save!

daenerys = User.new(email: "daenerys@yahoo.com", password: "dtargaryen",
            fname: "Daenerys",
            lname: "Targaryen", birthdate: "08/28/1989", sex: "female")

daenerys.save!

arya = User.new(email: "arya@yahoo.com", password: "aryastark",
            fname: "Arya",
            lname: "Stark", birthdate: "01/23/1996", sex: "female")

arya.save!

bran = User.new(email: "bran@yahoo.com", password: "branstark",
            fname: "Bran",
            lname: "Stark", birthdate: "07/10/1994", sex: "male")

bran.save!

sansa = User.new(email: "sansa@yahoo.com", password: "sansastark",
            fname: "Sansa",
            lname: "Stark", birthdate: "4/10/1990", sex: "female")

sansa.save!


Profile.destroy_all
Profile.create(user_id: homer.id, category: "placesYouveLived",
               sub_category: "currentCityAndHometown",
               tag: "Lives In", value: "Springfeild")
Profile.create(user_id: homer.id, category: "familyAndRelationships",
               sub_category: "familyMembers",
               tag: "Son", value: "Bart Simpson")
Profile.create(user_id: homer.id, category: "familyAndRelationships",
               sub_category: "familyMembers",
               tag: "Daughter", value: "Lisa Simpson")
Profile.create(user_id: homer.id, category: "familyAndRelationships",
               sub_category: "familyMembers",
               tag: "Wife", value: "Marge Simpson")
Profile.create(user_id: homer.id, category: "familyAndRelationships",
               sub_category: "relationship",
               tag: "In Ralationship", value: "Marge Simpson")
Profile.create(user_id: homer.id, category: "workAndEducation",
               sub_category: "work",
               tag: "Works At", value: "Springfeild Nuclear Power Plant")

FriendRequest.destroy_all
FriendRequest.create(requester_id: homer.id,
                     recipient_id: marge.id, status: "completed")
FriendRequest.create(requester_id: homer.id,
                     recipient_id: bart.id, status: "completed")
FriendRequest.create(requester_id: lisa.id,
                     recipient_id: homer.id, status: "completed")
FriendRequest.create(requester_id: homer.id,
                     recipient_id: moe.id, status: "completed")
FriendRequest.create(requester_id: barney.id,
                     recipient_id: homer.id, status: "completed")
FriendRequest.create(requester_id: lenny.id,
                     recipient_id: homer.id, status: "completed")
FriendRequest.create(requester_id: homer.id,
                     recipient_id: carl.id, status: "completed")
FriendRequest.create(requester_id: lisa.id,
                     recipient_id: bart.id, status: "completed")
FriendRequest.create(requester_id: ned.id,
                     recipient_id: homer.id)
FriendRequest.create(requester_id: burns.id,
                     recipient_id: homer.id)
FriendRequest.create(requester_id: lenny.id,
                     recipient_id: burns.id, status: "completed")

Friend.destroy_all
Friend.create(friender_id: homer.id, friendee_id: marge.id)
Friend.create(friender_id: homer.id, friendee_id: bart.id)
Friend.create(friender_id: lisa.id, friendee_id: homer.id)
Friend.create(friender_id: homer.id, friendee_id: moe.id)
Friend.create(friender_id: barney.id, friendee_id: homer.id)
Friend.create(friender_id: lenny.id, friendee_id: homer.id)
Friend.create(friender_id: homer.id, friendee_id: carl.id)

User.all.each do |person|
  next if homer.id == person.id
  2.times do
    random = User.all.sample.id
    while(person.friends.include?(random) || person.id == random)
      random = User.all.sample.id
    end
    Friend.create(friender_id: person.id, friendee_id: random)
  end
end

Post.destroy_all
50.times do |num|
  person = User.all.sample
  Post.create(author_id: person.id, wall_id: person.friends.sample, body: Faker::GreekPhilosophers.quote)
end

50.times do |num|
  person = User.all.sample
  post = Post.all.sample
  Like.create(user_id: person.id, likable_id: post.id, likable_type: "Post")
end
