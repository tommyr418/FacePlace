import React from 'react';
import { Link } from 'react-router-dom';

const Comments = ({ postId, users, posts, comments }) => {
  const postComments = posts[postId].comments.map((commentId) => {
    const comment = comments[commentId];
    const authorId = comment.author_id;
    const author = users[authorId];

    return (
      <div className="comment-item"
        key={ commentId }>
        <img id="comment-item-pic" src={ users[authorId].image_url }/>
        <p>
          <Link to={ `/users/${author.id}` }>
            { author.fname } { author.lname }
          </Link>
          { comment.body }
        </p>
      </div>
    );
  });

  return (
    <div className="comments">
      { postComments }
    </div>
  );
};

export default Comments;
