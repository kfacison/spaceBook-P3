import { React } from "react";

export default function PostLI({ post, createdAt }) {
  // Display page's posts
  //   const displayPosts = pagePosts.map((p, idx) => (<li key={idx} >{p.content} <br></br> Written by: {p.author}</li>))
  const date = new Date(createdAt)
  return (
    <li>
      {post}
      <br></br>Posted {date.toLocaleString()}
    </li>
  );
}
