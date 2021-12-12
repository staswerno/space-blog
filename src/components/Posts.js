import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((article, index) => (
        <Post article={article} index={index} />
      ))}
    </div>
  );
};
export default Posts;