export const requestFriend = request => (
  $.ajax({
    method: "POST",
    url: "/api/friend_requests",
    data: { friend_request: request },
  })
);

export const updateRequest = request => (
  $.ajax({
    method: "PATCH",
    url: `/api/friend_requests/${request.id}`,
    data: { friend_request: request },
  })
);

export const addFriend = friend => (
  $.ajax({
    method: "POST",
    url: "/api/friends",
    data: { friend },
  })
);

export const removeFriend = friend => (
  $.ajax({
    method: "DELETE",
    url: "/api/friends",
    data: { friend },
  })
);
