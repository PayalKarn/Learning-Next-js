"use client";

import { useEffect, useState } from "react";

const ClientComp = () => {
  const [postData, setPostData] = useState([]);
  const URL = "https://dummyjson.com/posts";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data , "API data");
      setPostData(data.posts);
      return data;
    };

    fetchData()
  }, []);
  return (
    <>
      <h1>Client Comp</h1>
      {/* <button className="bg-amber-600 py-4 px-2" onClick={() => alert("hii")}>
        Click me
      </button> */}

      <ul className="grid grid-cols-3 gap-5">
        {postData.map((curElem, index) => {
           
          return <li key={index}>{curElem.body}</li>;
        })}
      </ul>
    </>
  );
};
export default ClientComp;
