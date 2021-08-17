import Post from "./components/Post.js";
import "./style.css";
import axios from "axios";

const config = {
  server: "http://localhost:3000/",
};

axios.get(config.server + "posts").then((response) => {
  response.data.forEach((post) => {
    document.body.appendChild(
      new Post({
        title: post.title,
        body: post.body,
      }).$element
    );
  });
});
