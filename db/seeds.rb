# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(email: "tommy@yahoo.com", password: "tommyren", fname: "Tommy",
            lname: "Ren", birthdate: "01/01/1992", sex: "male")
User.create(email: "panda@yahoo.com", password: "rubyiscool", fname: "Julie",
            lname: "Ren", birthdate: "01/01/1990", sex: "female")
User.create(email: "kevin@yahoo.com", password: "xyzxyz123", fname: "Kevin",
            lname: "Ya", birthdate: "12/30/1992", sex: "male")


Profile.destroy_all
Profile.create(user_id: User.first.id, category: "placesYouveLived",
               sub_category: "currentCityAndHometown",
               value: "Lives In: Brooklyn")
Profile.create(user_id: User.first.id, category: "placesYouveLived",
               sub_category: "otherPlacesLived",
               value: "Lived In: Buffalo")
Profile.create(user_id: User.first.id, category: "familyAndRelationships",
               sub_category: "familyMembers",
               value: "Sister: Julie Ren")

Profile.create(user_id: User.all[1], category: "workAndEducation",
               sub_category: "highSchool",
               value: "Studied At: Brooklyn Tech")
Profile.create(user_id: User.all[1], category: "placesYouveLived",
               sub_category: "otherPlacesLived",
               value: "Lived In: Brooklyn")
Profile.create(user_id: User.all[1], category: "familyAndRelationships",
               sub_category: "familyMembers",
               value: "Brother: Tommy Ren")

Profile.create(user_id: User.all[2], category: "workAndEducation",
               sub_category: "work",
               value: "Works At: Boeing")
Profile.create(user_id: User.all[2], category: "placesYouveLived",
               sub_category: "otherPlacesLived",
               value: "Lived In: Brooklyn")
Profile.create(user_id: User.all[2], category: "familyAndRelationships",
               sub_category: "familyMembers",
               value: "Cousin: Tommy Ren")

Friend.destroy_all
Friend.create(friender_id: User.first.id, friendee_id: User.last.id)
Friend.create(friender_id: User.all[1].id, friendee_id: User.first.id)
