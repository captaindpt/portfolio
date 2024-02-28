import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../components/blog_navbar";

function Test() {
  useEffect(() => {
    document.title = "mani's logbook";
  }, []);

  return (
    <div>
      <div class="flex-container" id="blog_header_card">
        <h1 id="blog_header">logbook</h1>
        <BlogNavBar></BlogNavBar>
      </div>
      <p>
        <b>Feb 2024</b>
        <br />- entry
      </p>
    </div>
  );
}

export default Test;
