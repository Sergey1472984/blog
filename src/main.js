import Post from "./components/Post.js";
import "./style.css";
import axios from "axios";
import PostList from "./components/PostList.js"

const config = {
    server: "http://localhost:3000/",
};


let titles = [];


axios.get(config.server + "posts")
    //.then((response) => {
    //     response.data.forEach((post) => {
    //         document.body.appendChild(
    //             new PostList({
    //                 title: post.title,
    //             }).$element
    //         );

//     });
//     return response;
// })
.then((response) => {
    response.data.forEach((post) => {
        titles.push(post.title)
        postList.sortFunction(titles)
        console.log(titles)
        return titles
    });
}).then(() => {
    console.log(titles)
    for (let item of titles) {
        document.body.appendChild(
            new Post({
                title: item,
            }).$element
        );
    }

})

let postList = new PostList(titles);