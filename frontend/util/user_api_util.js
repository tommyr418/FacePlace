export const fetchUser = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`,
  });
};

export const addProfile = (profile) => {
  return $.ajax({
    method: "POST",
    url: "/api/profiles",
    data: { profile },
  });
};

export const updateProfile = (profile) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/profiles/${profile.id}`,
    data: { profile },
  });
};

export const removeProfile = (profileId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/profiles/${profileId}`,
  });
};
