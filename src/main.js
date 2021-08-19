import Post from "./components/Post/Post.js";
import "./style.css";
import axios from "axios";
import config from "./config/config.js"

const app = document.querySelector('#app')

axios.get(config.server + "posts").then((response) => {
    response.data.forEach((post) => {
        app.appendChild(
            new Post(post).$element
        );
    });
});