import React, { useState } from "react";
import { mockData } from "../utils/constants";

const Comments = ({ data }) => {
  const { avatar, username, comment, likes } = data;
  return (
    <div>
      <div className="p-3">
        <h1 className="font-bold p-2">Comments</h1>
        <span className="flex">
          <img className="w-5 rounded-full" src={avatar} />
          <span className="font-semibold ml-2">{username}</span>
        </span>
        <li className="list-none">{comment}</li>
        <span className="text-sm"> 👍🏻 {likes}</span>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
    const [showReplies, setShowReplies] = useState(true);

    const handleShowReplies = (id) => {
        setShowReplies(!showReplies)
    }
    // Recursive approach for nested structure for comments section
  return comments.map((comment, index) => (
        <div>
          <Comments key={index} data={comment} />
          <button className="text-blue-500 cursor-pointer" onClick={() => handleShowReplies(comment)}>Reply</button>
          <div className="pl-5 border-l-1 ml-5">
            {showReplies ? (
                <CommentList comments={comment.replies}/> 
            ) : null}
          </div>
        </div>
      ))
};

const CommentsSection = () => {
  return (
    <div className="p-2">
      <CommentList comments={mockData} />
    </div>
  );
};

export default CommentsSection;
