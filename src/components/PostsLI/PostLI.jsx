import { React } from "react";

export default function PostLI({ post, createdAt }) {
  const date = new Date(createdAt);
  return (
    <li>
      {post}
      <br></br>Posted {date.toLocaleString()}
    </li>
  );
}
