import React from "react";
import "./CreateBlog.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Createblog() {
  const navigate = useNavigate();

  const createBlogHandeler = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    // console.log(e.target.email.value);
    // console.log(e.target.blog.value);

    let data = {
      username: e.target.name.value,
      userid: e.target.email.value,
      blog: e.target.blog.value,
    };
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.blog.value = "";
    console.log(data);

    fetch("http://localhost:3500/createblog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("done");
      })
      .catch((err) => console.log(err));
    navigate("/viewblog");
  };
  return (
    <div className="create">
      <Link to={"/"}>
        <button id="kk">Home</button>
      </Link>
      <form className="form-style-7" onSubmit={createBlogHandeler}>
        <h2>Create a new blog here</h2>
        <ul>
          <li>
            <label>Name</label>
            <input type="text" name="name" />
            <span>Enter your full name here</span>
          </li>
          <li>
            <label>Email</label>
            <input type="email" name="email" />
            <span>Enter a valid email address</span>
          </li>

          <li>
            <label>Write your blog here</label>
            <textarea name="blog"></textarea>
            <span>Say something about you love</span>
          </li>
          <li>
            <button type="Submit"> Create Blog</button>
          </li>
        </ul>
      </form>
    </div>
  );
}
