export const likePost = like => {
  return $.ajax({
    method: "POST",
    url: `/api/posts/${like.likable_id}/likes`,
    data: { like },
  });
};

export const likeComment = like => {
  return $.ajax({
    method: "POST",
    url: `/api/comments/${like.likable_id}/likes`,
    data: { like },
  });
};

export const unlikePost = like => {
  return $.ajax({
    method: "DELETE",
    url: `/api/posts/${like.likable_id}/likes`,
    data: { like },
  });
};

export const unlikeComment = commentId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}/likes`,
  });
};
