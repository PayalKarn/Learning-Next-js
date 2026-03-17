const SingleCompPost = async (props) => {
  const user = await props.params;
  console.log(user);
  return <h1>user : {user.username}, postID : {user.postId}</h1>;
};
export default SingleCompPost;
