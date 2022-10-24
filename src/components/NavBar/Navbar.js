import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <div className="action">
      <div className="button-1">
        <Link to={"./createblog"}>
          <button>Create Your Blog</button>
        </Link>
      </div>
      <div className="button-1">
        <Link to={"./viewblog"}>
          <button>View All Blogs</button>
        </Link>
      </div>
    </div>
  );
}
