const ServerComp = async () => {
  const URL = "https://dummyjson.com/posts";
  const res = await fetch(URL);
  const data = await res.json();
  return(
    <>
    <ul className="grid grid-cols-3 gap-5">
        {data.posts.map((curElem, index) => {
           
          return <li key={index}>{curElem.body}</li>;
        })}
      </ul>
    </>
  );
};
export default ServerComp;
