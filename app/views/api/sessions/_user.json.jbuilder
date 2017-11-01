pending = user.incoming_requests.select do |request|
  request.status == "pending"
end

json.extract! user, :id, :fname, :lname
json.friends user.friends
json.image_url asset_path(user.profile_pic.url)
json.outgoingRequests user.outgoing_requests.pluck(:recipient_id)
json.pending_requests pending.each do |request|
  json.extract! request, :id, :requester_id
end
