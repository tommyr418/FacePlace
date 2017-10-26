json.user do
  json.extract! @user, :id, :fname, :lname, :email, :birthdate, :sex
end

profile_hash = Hash.new(Hash.new( [] ))
@user.profiles.each do |profile|
  unless profile_hash.has_key?(profile.category)
    profile_hash[profile.category] = {}
  end

  unless profile_hash[profile.category].has_key?(profile.sub_category)
    profile_hash[profile.category][profile.sub_category] = []
  end
    profile_hash[profile.category][profile.sub_category] << profile.value
end

json.profile profile_hash
