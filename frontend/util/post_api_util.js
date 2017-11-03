export const fetchPosts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/posts",
  });
};

export const fetchWallPosts = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/posts`
  });
};

export const fetchNewsFeed = () => {
  return $.ajax({
    method: "GET",
    url: "/api/user/news"
  });
};

export const fetchPost = postId => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${postId}`,
  });
};

export const createPost = (post) => {
  return $.ajax({
    method: "POST",
    url: "/api/posts",
    data: { post },
  });
};

export const updatePost = (post) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/posts/${post.id}`,
    data: { post },
  });
};

export const deletePost = postId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/posts/${postId}`,
  });
};
