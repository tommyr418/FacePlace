pending = user.incoming_requests.select do |request|
  request.status == "pending"
end

relevant = current_user.friends.push(current_user.id)
posts = Post.all.includes(:author).select do |post|
  relevant.include?(post.wall_id) || relevant.include?(post.author_id)
end

json.extract! user, :id, :fname, :lname
json.friends user.friends
json.outgoingRequests user.outgoing_requests.pluck(:recipient_id)
json.pending_requests pending.each do |request|
  json.extract! request, :id, :requester_id
end
json.news_feed posts.reverse.pluck(:id)
