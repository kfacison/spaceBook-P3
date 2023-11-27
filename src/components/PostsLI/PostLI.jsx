import {React} from 'react';
  
export default function PostLI({post},{author}) {
  // Display page's posts
//   const displayPosts = pagePosts.map((p, idx) => (<li key={idx} >{p.content} <br></br> Written by: {p.author}</li>))

  return <li>{post}<br></br>Written by: {author}</li>
  
}

