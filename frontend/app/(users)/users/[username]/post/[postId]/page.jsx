"use client"
import { use } from "react";

const SingleCompPost =  (props) => {
//   const user =  props.params;

  const user = use(props.params)
  console.log(user);
  return <h1>user : {user.username}, postID : {user.postId}</h1>;
};
export default SingleCompPost;
