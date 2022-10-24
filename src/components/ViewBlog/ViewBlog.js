import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./ViewBlog.css";
export default function ViewBlog() {
  const [api, setapi] = useState(0);
  const [responseData, setresponseData] = useState([]);

  async function getData() {
    let url = "http://localhost:3500/viewblog";
    let response = await fetch(url);
    let responseData1 = await response.json();
    setapi(1);
    setresponseData(responseData1);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Link to={"/"}>
        <button id="kk">Home</button>
      </Link>
      <div className="main">
        <h1>Blogs from our people</h1>

        {api === 1 ? (
          responseData.map((item, idx) => {
            return (
              <div className="blog" id={idx}>
                <p>Name : {item.username} </p>
                <p>Email : {item.userid} </p>
                <p>{item.blog}</p>
              </div>
            );
          })
        ) : (
          <p>Loading ....</p>
        )}
      </div>
    </div>
  );
}
