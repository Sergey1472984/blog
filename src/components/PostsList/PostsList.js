import Component from "../Component.js";
import Post from "../Post/Post.js";
import Button from "../Button/Button.js"

export default class PostsList extends Component {
    constructor(posts = [], className = "posts-list") {
        super(className);
        this.posts = posts;
        this.render();
    }

    handlerSortByTitle() {
        console.log("add-sort-function")
    }

    render() {
        const $buttonTitleElement = new Button(this.handlerSortByTitle, "По названию").$element;

        this.$element.appendChild($buttonTitleElement);

        this.posts.forEach((post) => {
            this.$element.appendChild(
                new Post(post).$element
            );
        });
    }
}