import React from "react";
import { Post } from "../models";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-lg">{post.excerpt}</p>
    </div>
  );
};

export default PostCard;
