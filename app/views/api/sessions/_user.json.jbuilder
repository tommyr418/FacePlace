json.extract! user, :id, :fname, :lname
json.friends user.friends
json.image_url asset_path(user.profile_pic.url)
json.outgoingRequests user.outgoing_requests.pluck(:recipient_id)
