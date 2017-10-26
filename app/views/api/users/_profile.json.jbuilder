profile_hash = Hash.new(Hash.new([]))

profile_hash['userId'] = user.id
user.profiles.each do |profile|
  unless profile_hash.key?(profile.category)
    profile_hash[profile.category] = {}
  end

  unless profile_hash[profile.category].key?(profile.sub_category)
    profile_hash[profile.category][profile.sub_category] = []
  end

  profile_hash[profile.category][profile.sub_category] << profile.value
end

json.profile profile_hash
